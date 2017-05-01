<?php

namespace App\Http\Controllers;

use App\Helpers\productsHelper;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index()
    {


        return view('home', compact('panel', 'suggestion', 'allWishes', 'events', 'tagsCloud', 'jumbotronClasses', 'i', 'banner'));
    }
}
