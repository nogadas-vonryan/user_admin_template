<?php

use App\Http\Controllers\BorrowingRecordController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\UserManagerController;
use App\Http\Middleware\JwtMiddleware;

Route::post('register', [AuthController::class, 'register']);
Route::post('login', [AuthController::class, 'login']);

Route::middleware([JwtMiddleware::class])->group(function () {
    Route::get('user', [AuthController::class, 'getUser']);
    Route::get('me', [HomeController::class, 'home']);
    Route::post('logout', [AuthController::class, 'logout']);

    Route::get('admin/users', [UserManagerController::class, 'getAllUsers']);
    Route::post('admin/users', [UserManagerController::class, 'blacklistUser']);
});