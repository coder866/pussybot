<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Ixudra\Curl\Facades\Curl;
use Illuminate\Support\Facades\Storage;

class getKittenGif implements ShouldQueue
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
          
            $response = Curl::to('https://api.thecatapi.com/v1/images/search?mime_types=gif')
            ->withHeader($API)
            ->asJson()
            ->get();
            if($response){

                $url = $response[0]->url;
                $contents = file_get_contents($url);
                $name = public_path('cats/'.substr($url, strrpos($url, '/') + 1));
                $res=file_put_contents($name, $contents);
                //Storage::put($name, $contents);
                $kitty=collect([]);
                dispatch(new tweetKitten(null,true,$name))->delay(now()->addSeconds(10));
            
            };
        } catch (\Throwable $th) {
            throw $th;
        }
    }
}
