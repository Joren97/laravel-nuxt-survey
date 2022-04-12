<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;

class LoginRequest extends FormRequest
{
    public function rules()
    {
        return [
            'email' => 'required|email|exists:users,email|max:50',
            'password' => 'required',
        ];
    }

    public function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(response()->json([
            'success' => false,
            'message' => 'Validation errors',
            'data' => $validator->errors()
        ], 400));
    }

    public function messages()
    {
        return [
            'email.required' => 'Email is required.',
            'email.email' => 'Email is not correct.',
            'email.exists' => 'Email does not exist.'
        ];
    }
}
