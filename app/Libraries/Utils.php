<?php

namespace App\Libraries;

use App;
use Auth;
use Cache;
use Carbon;
use DateTime;
use DateTimeZone;
use Exception;
use Input;
use Log;
use Request;
use Schema;
use Session;
use stdClass;
use View;
use WePay;

class Utils
{
    private static $weekdayNames = [
        'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday',
    ];

    public static $months = [
        'january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december',
    ];

    public static function isNinja()
    {
        return self::isNinjaProd() || self::isNinjaDev();
    }

    public static function isNinjaProd()
    {
        if (self::isReseller()) {
            return true;
        }
        return env('NINJA_PROD') == 'true';
    }

    public static function isNinjaDev()
    {
        return env('NINJA_DEV') == 'true';
    }

    public static function isReseller()
    {
        return self::getResllerType() ? true : false;
    }

    public static function getResllerType()
    {
        return isset($_ENV['RESELLER_TYPE']) ? $_ENV['RESELLER_TYPE'] : false;
    }

    public static function isDatabaseSetup()
    {
        try {
            if (Schema::hasTable('accounts')) {
                return true;
            }
        } catch (Exception $e) {
            return false;
        }
    }

    public static function isTravis()
    {
        return env('TRAVIS') == 'true';
    }

    public static function getSubdomain($url)
    {
        $parts = parse_url($url);
        $subdomain = '';

        if (isset($parts['host'])) {
            $host = explode('.', $parts['host']);
            if (count($host) > 2) {
                $subdomain = $host[0];
            }
        }

        return $subdomain;
    }

    public static function isOAuthEnabled()
    {
        $providers = [
            SOCIAL_GOOGLE,
            SOCIAL_FACEBOOK,
            SOCIAL_GITHUB,
            SOCIAL_LINKEDIN,
        ];

        foreach ($providers as $provider) {
            $key = strtoupper($provider) . '_CLIENT_ID';
            if (isset($_ENV[$key]) && $_ENV[$key]) {
                return true;
            }
        }

        return false;
    }

    public static function isWhiteLabel()
    {
        $account = false;

        if (self::isNinja()) {
            if (Auth::check()) {
                $account = Auth::user()->account;
            } elseif ($contactKey = session('contact_key')) {
                if ($contact = \App\Models\Contact::whereContactKey($contactKey)->first()) {
                    $account = $contact->account;
                }
            }
        } else {
            $account = \App\Models\Account::first();
        }

        return $account ? $account->hasFeature(FEATURE_WHITE_LABEL) : false;
    }

    public static function allowNewAccounts()
    {
        return self::isNinja() || Auth::check();
    }

    public static function isRegistered()
    {
        return Auth::check() && Auth::user()->registered;
    }

}
