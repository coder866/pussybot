<?php

namespace App\Http\Controllers;

use App\Jobs\getKitten;
use App\Jobs\tweetKitten;
use App\Models\kitten;
use Illuminate\Http\Request;
use Ixudra\Curl\Facades\Curl;
use NotificationChannels\Twitter\TwitterStatusUpdate;

class pussyController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        
        try {
            dispatch(new getKitten())->delay(now()->addSeconds(10));
            dd("Wait for it-".now());
            // $API="x-api-key:".env('KITTEN_API');
            // $response = Curl::to('https://api.thecatapi.com/v1/images/search?breed=Aegean&mime_types=png')
            // ->withHeader($API)
            // ->asJson()
            // ->get();
            // if($response){
            
            //     $kitty=kitten::create([
            //         'kid'=>$response[0]->id,
            //         'kurl'=>$response[0]->url,
            //         'kwidth'=>$response[0]->width,
            //         'kheight'=>$response[0]->height,
            //     ]);
            //     $kitty ->addMediaFromUrl($response[0]->url)
            //         ->toMediaCollection('kittens');
                
            //     //dispatch(new tweetKitten($kitty))->delay(now()->addSeconds(10));
            //     //return $kitty;
            
            // };
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
