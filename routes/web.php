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
