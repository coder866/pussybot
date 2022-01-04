<?php

namespace App\Providers;

use App\Jobs\getKitten;
use Illuminate\Queue\Events\JobProcessed;
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Queue;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        
        Queue::after(function(JobProcessed $event){
            if ($event->job instanceof getKitten) {
                // get the job payload to pass to next job
                //$data = $event->job->payload
                //dd($event->job->payload);
    
               //dispatch(new NextJob($data));
                // or use the static method
                //NextJob::dispatch($data);
            }
        });
    }
}
