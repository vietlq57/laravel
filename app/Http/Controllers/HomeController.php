<?php

namespace App\Http\Controllers;

use App\Libraries\Utils;
use App\Models\Account;
use App\Ninja\Mailers\Mailer;
use Auth;
use Input;
use Mail;
use Redirect;
use Request;
use Response;
use Session;
use View;

/**
 * Class HomeController.
 */
class HomeController extends Controller
{
    /**
     * @return \Illuminate\Http\RedirectResponse
     */
    public function showIndex()
    {
        Session::reflash();

        if (! Utils::isNinja() && (! Utils::isDatabaseSetup() || Account::count() == 0)) {
            return Redirect::to('/setup');
        } elseif (Auth::check()) {
            return Redirect::to('/dashboard');
        } else {
            return Redirect::to('/login');
        }
    }
}
