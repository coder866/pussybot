<?php

namespace App\Jobs;

use Atymic\Twitter\Facade\Twitter;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Purr;

class SearchLikeRtJob implements ShouldQueue
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
            $twts=Purr::tweetSearch();
            if($twts){
                foreach($twts as $twt){
                    $Rtresp=Twitter::forApiV1()->postRt($twt->id);
                    $FVresp=Twitter::forApiV1()->postFavorite(['id'=>$twt->id]);
                }
            }
    
        } catch (\Throwable $th) {
            
        }
    }
}
