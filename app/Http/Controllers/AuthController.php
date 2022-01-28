<?php

namespace App\Http\Controllers;

use App\Htpp\Traits\HttpResponseTrait;
use App\Models\User;
use Illuminate\Http\Request;
use Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    use HttpResponseTrait;

    // public function createAccount(Request $request)
    // {
    //     try {
    //         $attr = $request->validate([
    //             'name' => 'required|min:3',
    //             'email' => 'required|email|unique:users',
    //             'password' => 'required|confirmed|min:6',
    //         ]);


    //         $user = User::create([
    //             'name' => $request->name,
    //             'email' => $request->email,
    //             'password' => Hash::make($request->password),
    //         ]);

    //         return $this->succes('User Created Successfully', $user, 200);
    //     } catch (\Throwable $th) {
    //         return $this->failure($th->getMessage());
    //     }
    // }


    // public function login(Request $request)
    // {
    //     try {
    //         $attr = $request->validate([
    //             'email' => 'required|email',
    //             'password' => 'required|min:6'
    //         ]);

    //         Auth::attempt($attr);
    //     } catch (\Throwable $th) {
    //         return $this->failure($th->getMessage());
    //     }
    // }
}
