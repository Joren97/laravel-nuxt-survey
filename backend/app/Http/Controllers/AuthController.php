<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Models\User;
use App\Traits\MyHttpResponse;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\Routing\ResponseFactory;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rules\Password;

class AuthController extends Controller
{
    use MyHttpResponse;

    public function register(Request $request): Response|Application|ResponseFactory
    {
        $data = $request->validate([
            'name' => 'required|string',
            'email' => 'required|email|string|unique:users,email',
            'password' => [
                'required',
                'confirmed',
                Password::min(8)->mixedCase()->numbers()->symbols()
            ]
        ]);

        /** @var User $user */
        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => bcrypt($data['password'])
        ]);
        $token = $user->createToken('main')->plainTextToken;

        return $this->success("Registration successful", [
            'user' => $user,
            'token' => $token
        ]);
    }

    public function login(LoginRequest $request): Response|Application|ResponseFactory
    {
        $credentials = $request->validate([
            'email' => 'required|email|string|exists:users,email',
            'password' => [
                'required',
            ],
            'remember' => 'boolean'
        ]);
        $remember = $credentials['remember'] ?? false;
        unset($credentials['remember']);

        if (!Auth::attempt($credentials, $remember)) {
            return $this->error("Invalid credentials", 422);
        }
        $user = Auth::user();
        $token = $user->createToken('main')->plainTextToken;

        return $this->success("Authentication successful", [
            'user' => $user,
            'token' => $token
        ]);
    }

}
