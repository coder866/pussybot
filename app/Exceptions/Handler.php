<?php

namespace App\Exceptions;

use DI\NotFoundException;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Nette\Schema\ValidationException;
use Throwable;

class Handler extends ExceptionHandler
{
    /**
     * A list of the exception types that are not reported.
     *
     * @var array<int, class-string<Throwable>>
     */
    protected $dontReport = [
        //
    ];

    /**
     * A list of the inputs that are never flashed for validation exceptions.
     *
     * @var array<int, string>
     */
    protected $dontFlash = [
        'current_password',
        'password',
        'password_confirmation',
    ];

    /**
     * Register the exception handling callbacks for the application.
     *
     * @return void
     */
    public function register()
    {
        $this->reportable(function (Throwable $e) {
            //
        });

        //handle Validation Exception
//        $this->renderable(function(ValidationException $e,$request){
//            if($request->expectsJson()){
//                return response()->json([
//                    'status'=>false,
//                    'message'=>'validation failed',
//                    'data'=>null,
//                    'error'=>$e->getMessageObjects()
//                ],422);
//            }
//        });
        //handle all AuthorizationException
//        $this->renderable(function(AuthorizationException $e,$request){
//            if($request->expectsJson()){
//                return response()->json([
//                    'status'=>false,
//                    'message'=>'Valid auth Credentials Required',
//                    'data'=>null,
//                    'error'=>null,
//                ],401);
//            }
//            return redirect()->guest('login');
//        });
//        //handle all NotFoundException
//        $this->renderable(function(NotFoundException $e,$request){
//            if($request->expectsJson()){
//                return response()->json([
//                    'status'=>false,
//                    'message'=>'Not Found',
//                    'data'=>null,
//                    'error'=>null,
//                ],404);
//            }
//        });
    }
}
