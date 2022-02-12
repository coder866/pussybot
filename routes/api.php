<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HashTagsController;
use App\Http\Controllers\AuthController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::get('/user/auth', [AuthController::class, 'getAuthUser']);
 Route::resource('create-hashtag',HashTagsController::class);
 Route::get('/get-user-tags/{id}',[HashTagsController::class,'getUserTags']);
});

