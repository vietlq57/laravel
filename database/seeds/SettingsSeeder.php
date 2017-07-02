<?php

use Illuminate\Database\Seeder;

class SettingsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */

    public function run()
    {
        \DB::table('settings')->delete();

        DB::table('settings')->insert([
            ['site_name'   => 'User',
             'logo'        => '',
             'name'        => 'User',
             'email'       => 'info@example.com'
            ]
        ]);
    }

}
