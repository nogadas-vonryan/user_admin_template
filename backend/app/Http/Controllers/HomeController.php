<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;

class HomeController extends Controller
{
    public function home() {
        $user = JWTAuth::user();
        return $user;
    }
}
