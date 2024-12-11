<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserManagerController extends Controller
{
    public function getAllUsers() {
        $users = User::all();
        return $users;
    }

    public function blacklistUser(Request $request) {
        $username = $request->input('username');
        $user = User::where('username', $username)->first();

        if ($user) {
            $user->blacklisted = true;
            $user->save();
            return response()->json(['message' => 'User blacklisted successfully.']);
        } else {
            return response()->json(['message' => 'User not found.'], 404);
        }
    }
}
