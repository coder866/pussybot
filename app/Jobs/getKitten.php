<?php

namespace App\Jobs;

use App\Models\kitten;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Ixudra\Curl\Facades\Curl;


class getKitten implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        try {
            $API="x-api-key:".env('KITTEN_API');
            $response = Curl::to('https://api.thecatapi.com/v1/images/search?breed=Aegean&mime_types=png')
            ->withHeader($API)
            ->asJson()
            ->get();
            if($response){

                $kitty=kitten::create([
                    'kid'=>$response[0]->id,
                    'kurl'=>$response[0]->url,
                    'kwidth'=>$response[0]->width,
                    'kheight'=>$response[0]->height,
                ]);
                $kitty ->addMediaFromUrl($response[0]->url)
                    ->toMediaCollection('kittens');
                
                dispatch(new tweetKitten($kitty))->delay(now()->addSeconds(10));
            
            };
        } catch (\Throwable $th) {
            throw $th;
        }
                
    }
}