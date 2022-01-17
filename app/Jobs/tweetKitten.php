<?php

namespace App\Jobs;

use App\Models\kitten;
use App\Providers\PurrServiceProvider;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use NotificationChannels\Twitter\TwitterStatusUpdate;
use Atymic\Twitter\Facade\Twitter;
use Illuminate\Support\Facades\File;
use Ixudra\Curl\Facades\Curl;
use Purr;

class tweetKitten implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;
    public $kitten,$isGif,$filename;
    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct(kitten $kitten=null,$isGif=false,$filename='')
    {
        $this->kitten=$kitten;
        $this->isGif=$isGif;
        $this->filename=$filename;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        // $topics=collect(collect(Twitter::forApiV1()->getTrendsPlace(['id'=>1528488]))[0]->trends)->sortByDesc('tweet_volume')->random(5)->implode('name', ', ');

        // $quote=Curl::to('https://api.quotable.io/random')
        //     ->asJson()
        //     ->get();
        //$tweetText=$quote->content.' ~'.$quote->author.PHP_EOL.$topics;

        $tweetText=Purr::getTweetText();
        $image2upload=$this->isGif?File::get($this->filename):
            File::get($this->kitten->getFirstMediaPath('kittens','kitten'));
        $uploaded_media = Twitter::forApiV1()->uploadMedia(['media' =>$image2upload ]);
       // Twitter::forApiV1()->postTweet(['status' => $tweetText, 'media_ids' => $uploaded_media->media_id_string]);
        Twitter::forApiV1()->postTweet(['status' => $tweetText]);
       
    }
}
