<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use Theme;

/**
 * Class FrontendController.
 */
class FrontendController extends Controller
{
    public function index(){
        return Theme::view('frontend.index');
    }
}