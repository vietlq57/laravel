<?php

namespace App\Http\Controllers;

use App\Events\UserSettingsChanged;
use App\Models\Account;
use App\Models\Industry;
use App\Ninja\Mailers\Mailer;
use App\Ninja\Repositories\AccountRepository;
use App\Services\EmailService;
use Artisan;
use Auth;
use Cache;
use Config;
use DB;
use Event;
use Exception;
use Input;
use Redirect;
use Response;
use Session;
use Utils;
use View;

class AppController extends Controller
{
    protected $mailer;

    public function __construct(Mailer $mailer)
    {
        //parent::__construct();


        $this->mailer = $mailer;
    }

    public function showSetup()
    {
        if (Utils::isNinjaProd() || (Utils::isDatabaseSetup() && Account::count() > 0)) {
            return Redirect::to('/');
        }

        return View::make('setup');
    }

    public function doSetup()
    {
        if (Utils::isNinjaProd()) {
            return Redirect::to('/');
        }

        $valid = false;
        $test = Input::get('test');

        $app = Input::get('app');
        $app['key'] = env('APP_KEY') ?: strtolower(str_random(RANDOM_KEY_LENGTH));
        $app['debug'] = Input::get('debug') ? 'true' : 'false';
        $app['https'] = Input::get('https') ? 'true' : 'false';

        $database = Input::get('database');
        $dbType = 'mysql'; // $database['default'];
        $database['connections'] = [$dbType => $database['type']];
        $mail = Input::get('mail');

        if ($test == 'mail') {
            return self::testMail($mail);
        }

        $valid = self::testDatabase($database);

        if ($test == 'db') {
            return $valid === true ? 'Success' : $valid;
        } elseif (! $valid) {
            return Redirect::to('/setup')->withInput();
        }

        if (Utils::isDatabaseSetup() && Account::count() > 0) {
            return Redirect::to('/');
        }

        $_ENV['APP_ENV'] = 'production';
        $_ENV['APP_DEBUG'] = $app['debug'];
        $_ENV['APP_LOCALE'] = 'en';
        $_ENV['APP_URL'] = $app['url'];
        $_ENV['APP_KEY'] = $app['key'];
        $_ENV['APP_CIPHER'] = env('APP_CIPHER', 'AES-256-CBC');
        $_ENV['REQUIRE_HTTPS'] = $app['https'];
        $_ENV['DB_TYPE'] = $dbType;
        $_ENV['DB_HOST'] = $database['type']['host'];
        $_ENV['DB_DATABASE'] = $database['type']['database'];
        $_ENV['DB_USERNAME'] = $database['type']['username'];
        $_ENV['DB_PASSWORD'] = $database['type']['password'];
        $_ENV['MAIL_DRIVER'] = $mail['driver'];
        $_ENV['MAIL_PORT'] = $mail['port'];
        $_ENV['MAIL_ENCRYPTION'] = $mail['encryption'];
        $_ENV['MAIL_HOST'] = $mail['host'];
        $_ENV['MAIL_USERNAME'] = $mail['username'];
        $_ENV['MAIL_FROM_NAME'] = $mail['from']['name'];
        $_ENV['MAIL_FROM_ADDRESS'] = $mail['from']['address'];
        $_ENV['MAIL_PASSWORD'] = $mail['password'];
        $_ENV['PHANTOMJS_CLOUD_KEY'] = 'a-demo-key-with-low-quota-per-ip-address';
        $_ENV['PHANTOMJS_SECRET'] = strtolower(str_random(RANDOM_KEY_LENGTH));
        $_ENV['MAILGUN_DOMAIN'] = $mail['mailgun_domain'];
        $_ENV['MAILGUN_SECRET'] = $mail['mailgun_secret'];

        $config = '';
        foreach ($_ENV as $key => $val) {
            if (is_array($val)) {
                continue;
            }
            if (preg_match('/\s/', $val)) {
                $val = "'{$val}'";
            }
            $config .= "{$key}={$val}\n";
        }

        // Write Config Settings
        $fp = fopen(base_path().'/.env', 'w');
        fwrite($fp, $config);
        fclose($fp);

        // == DB Migrate & Seed == //
        $sqlFile = base_path() . '/database/setup.sql';
        DB::unprepared(file_get_contents($sqlFile));
        Cache::flush();
        Artisan::call('optimize', ['--force' => true]);

        $firstName = trim(Input::get('first_name'));
        $lastName = trim(Input::get('last_name'));
        $email = trim(strtolower(Input::get('email')));
        $password = trim(Input::get('password'));
        $account = $this->accountRepo->create($firstName, $lastName, $email, $password);
        $user = $account->users()->first();

        return Redirect::to('/login');
    }

    private function testDatabase($database)
    {
        $dbType = 'mysql'; // $database['default'];
        Config::set('database.default', $dbType);
        foreach ($database['connections'][$dbType] as $key => $val) {
            Config::set("database.connections.{$dbType}.{$key}", $val);
        }

        try {
            DB::reconnect();
            $valid = DB::connection()->getDatabaseName() ? true : false;
        } catch (Exception $e) {
            return $e->getMessage();
        }

        return $valid;
    }

    private function testMail($mail)
    {
        $email = $mail['from']['address'];
        $fromName = $mail['from']['name'];

        foreach ($mail as $key => $val) {
            Config::set("mail.{$key}", $val);
        }

        Config::set('mail.from.address', $email);
        Config::set('mail.from.name', $fromName);

        $data = [
            'text' => 'Test email',
            'fromEmail' =>  $email
        ];

        try {
            $response = $this->mailer->sendTo($email, $email, $fromName, 'Test email', 'contact', $data);

            return $response === true ? 'Sent' : $response;
        } catch (Exception $e) {
            return $e->getMessage();
        }
    }
}
