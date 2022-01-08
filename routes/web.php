<?php

use App\Models\kitten;
use Atymic\Twitter\Facade\Twitter;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Route;
use Intervention\Image\ImageManagerStatic as Image;



/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    
   return view('welcome');
});

Route::get('/tweetMedia', function()
{
    
	$uploaded_media = Twitter::forApiV1()->uploadMedia(['media' => File::get(public_path('media/pussyBot.png'))]);
    //dd($uploaded_media);
	return Twitter::forApiV1()->postTweet(['status' => 'Happy New Year', 'media_ids' => $uploaded_media->media_id_string]);
});

Route::get('/tweet', function()
{
	return Twitter::forApiV1()->postTweet(['status' => 'Happy New Year,Pussy Lovers #PussyBot,#KittenLove, #HappyNewYear', 'response_format' => 'json']);
});

Route::get('/getTrends', function()
{
	//return Twitter::forApiV1()->getTrendsClosest([1.2921,36.8219]);
	//dd(Twitter::forApiV1()->getTrendsClosest(['lat'=>1.2921,'long'=>36.8219]));
	return Twitter::forApiV1()->getTrendsAvailable();
    //dd(collect(collect(Twitter::forApiV1()->getTrendsPlace(['id'=>1528488]))[0]->trends)->sortByDesc('tweet_volume')->random(5)->implode('name', ', '));
    //return collect(collect(Twitter::forApiV1()->getTrendsPlace(['id'=>1528488]))[0]->trends)->sortByDesc('tweet_volume')->random(5)->implode('name', ', ');

	//return Twitter::forApiV1()->getTrendsPlace(['id'=>1528488]);
});

Route::get('/art',function(){
    dd(Purr::getTrendingKe());
});
Route::get('/wt',function(){
    dd(Purr::getWorldwideTrending());
});
Route::get('/woeidt',function(){
    
    dd(Purr::getTrendingByWoeid(1528488));
});
Route::get('/random',function(){
    
    return Purr::getTrendingRandom();
});
Route::get('/getText',function(){
    
    return Purr::getTweetText();
});

Route::get('/getImage',function(){
    
    $image=Image::load('https://cdn2.thecatapi.com/images/8x4MlAzwH.png');
    $image->save(public_path('media/catx.png'));
    return 'saved';
});


Route::get('/getKitten', [\App\Http\Controllers\pussyController::class,'store']);


// sudo supervisorctl reread
// sudo supervisorctl update
// sudo supervisorctl start pussybot-worker:*

// php artisan cache:clear;
// php artisan view:clear;
// php artisan route:clear;
// php artisan clear-compiled;
// php artisan config:clear;
// php artisan config:cache;
// composer dump-autoload;