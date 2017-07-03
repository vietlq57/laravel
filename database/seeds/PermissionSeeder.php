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
            ['name' => 'role-users', 'display_name' => 'Role Users', 'description' => 'user role role-users'],
            ['name' => 'role-roles&permissions', 'display_name' => 'Role Roles and Permissions', 'description' => 'user role roles and permissions'],

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
    }

}
