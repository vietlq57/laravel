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

}
