<?php

namespace App\Http\Responses;

use Laravel\Fortify\Contracts\LoginResponse as LoginResponseContract;
use App\Http\Traits\HttpResponseTrait;

class LoginResponse implements LoginResponseContract
{
    /**
     * @param  $request
     * @return mixed
     */

    use HttpResponseTrait;

    public function toResponse($request): \Illuminate\Http\JsonResponse
    {
        return $this->success("Logged In Successfully",Auth()->user());
    }
}
