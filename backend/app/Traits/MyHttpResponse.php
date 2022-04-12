<?php

namespace App\Traits;

use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\Routing\ResponseFactory;
use Illuminate\Http\Response;

trait MyHttpResponse
{
    protected function success($message, $data = [], $status = 200): Response|Application|ResponseFactory
    {
        return response([
            'success' => true,
            'data' => $data,
            'message' => $message,
        ], $status);
    }

    protected function error($message, $status = 400): Response|Application|ResponseFactory
    {
        return response([
            'success' => false,
            'message' => $message,
        ], $status);
    }
}
