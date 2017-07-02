<?php

namespace App;

use Zizaco\Entrust\EntrustPermission;

/**
 * App\Permission
 */
class Permission extends EntrustPermission
{

    public static function getCount()
    {
        return Permission::count();
    }

}
