<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

/**
 * User Login And Forget Password Routes
 */
Route::group(['namespace' => 'Auth', 'middleware' => 'web'], function () {
    Route::get('/', ['as' => 'user.login', 'uses' => 'LoginController@index']);
    Route::post('/login', ['as' => 'user.login_check', 'uses' => 'LoginController@ajaxLogin']);
    Route::get('register', ['as' => 'get-register', 'uses' => 'LoginController@getRegister']);
    Route::post('register', ['as' => 'post-register', 'uses' => 'LoginController@postRegister']);
    Route::get('logout', ['as' => 'user.logout', 'uses' => 'LoginController@logout']);
    Route::get('forget-password', ['as' => 'get-reset', 'uses' => 'LoginController@getReset']);
    Route::post('forget-password', ['as' => 'post-reset', 'uses' => 'LoginController@postReset']);
    Route::get('password/reset', ['as' => 'get-password-reset', 'uses' => 'LoginController@getPasswordReset']);
    Route::post('password/reset', ['as' => 'post-password-reset', 'uses' => 'LoginController@postPasswordReset']);
    // Social Auth
    Route::get('/redirect/{provider}', ['uses' => 'LoginController@redirect', 'as' => 'social.login']);
    Route::get('/callback/{provider}', ['uses' => 'LoginController@callback']);
});

Route::group(['middleware' => ['auth.user', 'web'], 'prefix' => ''], function () {

    //region Dashboard Routes
    Route::resource('dashboard', 'DashboardController', ['as' => 'user']);
    //endregion

    //region Profile Routes
    Route::get('profile-edit', ['as' => 'profile-edit', 'uses' => 'UserProfileSettingController@editProfile']);
    Route::resource('profile', 'UserProfileSettingController');
    //endregion

    //region Users Routes
    Route::get('get-users', ['as' => 'user.get-users', 'uses' => 'UserController@getUsersList']);
    Route::get('role-modal/{id}', ['as' => 'user.role-modal', 'uses' => 'UserController@getRoleModal']);
    Route::post('assign-role', ['as' => 'user.update-role', 'uses' => 'UserController@postUpdateRole']);
    Route::resource('users', 'UserController', ['as' => 'user']);
    //endregion

    //region Roles Or Permission Route

    Route::get('get-roles', ['as' => 'user.get-roles', 'uses' => 'RolesController@getRoles']);
    Route::resource('roles', 'RolesController', ['as' => 'user']);

    Route::get('get-permissions', ['as' => 'user.get-permissions', 'uses' => 'PermissionController@getPermissions']);
    Route::resource('permissions', 'PermissionController', ['as' => 'user']);
});
