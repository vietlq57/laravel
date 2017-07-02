<?php

namespace App\Http\Controllers\Auth;

use App\Classes\Reply;
use App\Http\Controllers\Controller;
use App\Http\Controllers\UserBaseController;
use App\Models\Setting;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Auth;
use Redirect;
use View;

class LoginController extends UserBaseController
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = '/home';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }

    public function index(){
        $this->page_title = 'Login';
        $global =  Setting::first();

        if(Auth::check()){
            return Redirect::route('user.dashboard.index');
        }

        return View::make('admin.login', ['pageTitle' => $this->page_title, 'global']);
    }

    public function ajaxLogin(LoginRequest $request)
    {
        $email      = $request->get('email');
        $password   = $request->get('password');

        // Credentials to check user login
        $credentials = array('email' => $email, 'password' => $password);
        $remember    = $request->remember ? true : false;


        if (Auth::attempt($credentials, $remember)) {
            // User login success
            return Reply::redirect(route('user.dashboard.index'), 'Logged in successfully.');

        }


        // Login Failed
        return Reply::error('Invalid Credentials.');
    }
}
