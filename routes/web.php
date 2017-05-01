<?php
Route::get('/', function () {
    return redirect('/home');
});

$this->get('oauth2google', 'Auth\Oauth2Controller@oauth2google')->name('oauth2google');
$this->get('oauth2facebook', 'Auth\Oauth2Controller@oauth2facebook')->name('oauth2facebook');
$this->get('oauth2github', 'Auth\Oauth2Controller@oauth2github')->name('oauth2github');

$this->get('login', 'Auth\LoginController@showLoginForm')->name('auth.login');
$this->post('login', 'Auth\LoginController@login')->name('auth.login');
$this->get('register', 'Auth\RegisterController@showRegistrationForm')->name('auth.register');
$this->post('register', 'Auth\RegisterController@register')->name('auth.register');
$this->get('password/reset', 'Auth\ForgotPasswordController@showLinkRequestForm')->name('auth.password.reset');
$this->post('logout', 'Auth\LoginController@logout')->name('auth.logout');

Route::group(['middleware' => 'auth'], function () {
    Route::get('/home', 'HomeController@index');
});