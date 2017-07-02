<?php

use App\Models\User;
use Illuminate\Database\Seeder;

class PermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */

    public function run()
    {
        \DB::table('permissions')->delete();
        // Role user
        \DB::table('role_user')->delete();
        // Permission Role
        \DB::table('permission_role')->delete();

        DB::table('permissions')->insert([
            ['name' => 'view-dashboard', 'display_name' => 'View Dashboard', 'description' => 'Allow to view dashboard'],
            ['name' => 'view-users', 'display_name' => 'View Users', 'description' => 'Allow to view users details'],
            ['name' => 'add-user', 'display_name' => 'Add User', 'description' => 'Allow to add user details'],
            ['name' => 'edit-user', 'display_name' => 'Edit User', 'description' => 'Allow to edit user details'],
            ['name' => 'delete-user', 'display_name' => 'Delete User', 'description' => 'Allow to delete user'],
            ['name' => 'add-role', 'display_name' => 'Add Role', 'description' => 'Allow to View role'],
            ['name' => 'edit-role', 'display_name' => 'Edit Role', 'description' => 'Allow to edit Role'],
            ['name' => 'delete-role', 'display_name' => 'Delete Role', 'description' => 'Allow to delete Role'],
            ['name' => 'view-role', 'display_name' => 'View Roles', 'description' => 'Allow to view role'],
            ['name' => 'add-permission', 'display_name' => 'Add Permission', 'description' => 'Allow to add permission'],
            ['name' => 'edit-permission', 'display_name' => 'edit Permission', 'description' => 'Allow to edit permission'],
            ['name' => 'delete-permission', 'display_name' => 'Delete Permission', 'description' => 'Allow to delete permission'],
            ['name' => 'view-permission', 'display_name' => 'View Permission', 'description' => 'Allow to view permissions'],
        ]);

        \DB::table('roles')->delete();

        \DB::statement('ALTER TABLE roles AUTO_INCREMENT = 1');

        DB::table('roles')->insert([
            ['name' => 'admin', 'display_name' => 'Admin', 'description' => 'Superadmin'],
            ['name' => 'role-dashboard', 'display_name' => 'Role Dashboard', 'description' => 'user role dashboard'],
            ['name' => 'role-users', 'display_name' => 'Role Users', 'description' => 'user role role-users'],
            ['name' => 'role-roles&permissions', 'display_name' => 'Role Roles and Permissions', 'description' => 'user role roles and permissions'],
            ['name' => 'role-email-template', 'display_name' => 'Role Email Template', 'description' => 'user role email template'],
            ['name' => 'role-messages', 'display_name' => 'Role messages', 'description' => 'user role messages'],
            ['name' => 'role-settings', 'display_name' => 'Role settings', 'description' => 'user role settings'],

        ]);


        $roles = \App\Role::all();
        $users = User::all();

        foreach($users as $user) {
            if($user->user_type == 'admin') {
                DB::table('role_user')->insert([
                    ['user_id' => $user->id, 'role_id' => 1],
                ]);
            }
            else {
                DB::table('role_user')->insert([
                    ['user_id' => $user->id, 'role_id' => $roles->random()->id],
                ]);
            }
        }

        $permissions = \App\Permission::all();

        foreach($permissions as $permission) {
            DB::table('permission_role')->insert([
                ['permission_id' => $permission->id, 'role_id' => 1],
            ]);
        }

        if (env('APP_ENV') !== 'production') {
            DB::table('permission_role')->insert([
                ['permission_id' => 1, 'role_id' => 2],
                ['permission_id' => 2, 'role_id' => 3],
                ['permission_id' => 3, 'role_id' => 3],
                ['permission_id' => 4, 'role_id' => 3],
                ['permission_id' => 5, 'role_id' => 3],
                ['permission_id' => 6, 'role_id' => 3],
                ['permission_id' => 7, 'role_id' => 4],
                ['permission_id' => 8, 'role_id' => 4],
                ['permission_id' => 9, 'role_id' => 4],
                ['permission_id' => 10, 'role_id' => 4],
                ['permission_id' => 11, 'role_id' => 4],
                ['permission_id' => 12, 'role_id' => 4],
                ['permission_id' => 13, 'role_id' => 4],
                ['permission_id' => 14, 'role_id' => 5],
                ['permission_id' => 15, 'role_id' => 6],
                ['permission_id' => 16, 'role_id' => 6],
                ['permission_id' => 17, 'role_id' => 7],
                ['permission_id' => 18, 'role_id' => 8],
                ['permission_id' => 19, 'role_id' => 8],
                ['permission_id' => 20, 'role_id' => 8],
                ['permission_id' => 21, 'role_id' => 8],
                ['permission_id' => 22, 'role_id' => 8],
                ['permission_id' => 23, 'role_id' => 8],
                ['permission_id' => 24, 'role_id' => 8],
                ['permission_id' => 25, 'role_id' => 4],
            ]);
        }
    }

}
