<?php

namespace App\Ninja\Repositories;

use App\Models\Account;
use App\Models\AccountEmailSettings;
use App\Models\AccountGateway;
use App\Models\AccountToken;
use App\Models\Client;
use App\Models\Company;
use App\Models\Contact;
use App\Models\Credit;
use App\Models\Invitation;
use App\Models\Invoice;
use App\Models\InvoiceItem;
use App\Models\Language;
use App\Models\User;
use App\Models\UserAccount;
use App\Models\LookupUser;
use Auth;
use Input;
use Request;
use Schema;
use Session;
use stdClass;
use URL;
use Utils;
use Validator;

class AccountRepository
{
    public function create($firstName = '', $lastName = '', $email = '', $password = '', $company = false)
    {
        if (! $company) {
            $company = new Company();
            $company->utm_source = Input::get('utm_source');
            $company->utm_medium = Input::get('utm_medium');
            $company->utm_campaign = Input::get('utm_campaign');
            $company->utm_term = Input::get('utm_term');
            $company->utm_content = Input::get('utm_content');
            $company->referral_code = Session::get(SESSION_REFERRAL_CODE);
            $company->save();
        }

        $account = new Account();
        $account->ip = Request::getClientIp();
        $account->account_key = strtolower(str_random(RANDOM_KEY_LENGTH));
        $account->company_id = $company->id;

        if ($locale = Session::get(SESSION_LOCALE)) {
            if ($language = Language::whereLocale($locale)->first()) {
                $account->language_id = $language->id;
            }
        }

        $account->save();

        $user = new User();
        if (! $firstName && ! $lastName && ! $email && ! $password) {
            $user->password = strtolower(str_random(RANDOM_KEY_LENGTH));
            $user->username = strtolower(str_random(RANDOM_KEY_LENGTH));
        } else {
            $user->first_name = $firstName;
            $user->last_name = $lastName;
            $user->email = $user->username = $email;
            if (! $password) {
                $password = strtolower(str_random(RANDOM_KEY_LENGTH));
            }
            $user->password = bcrypt($password);
        }

        $user->confirmed = ! Utils::isNinja();
        $user->registered = ! Utils::isNinja() || $email;

        if (! $user->confirmed) {
            $user->confirmation_code = strtolower(str_random(RANDOM_KEY_LENGTH));
        }

        $account->users()->save($user);

        $emailSettings = new AccountEmailSettings();
        $account->account_email_settings()->save($emailSettings);

        return $account;
    }
}
