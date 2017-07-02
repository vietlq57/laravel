<?php

namespace App;

use Zizaco\Entrust\EntrustRole;

/**
 * App\Role
 */
class Role extends EntrustRole
{

    /**
     * @return mixed
     */

    public static function getCount()
    {
        return Role::count();
    }

}
