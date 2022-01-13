<?php

namespace App\Console;

use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;
use App\Jobs\getKitten;
use App\Jobs\getKittenGif;
use App\Jobs\SearchLikeRtJob;

class Kernel extends ConsoleKernel
{
    /**
     * Define the application's command schedule.
     *
     * @param  \Illuminate\Console\Scheduling\Schedule  $schedule
     * @return void
     */
    protected function schedule(Schedule $schedule)
    {
        // $schedule->command('inspire')->hourly();

        $schedule->call(function () {
            //dispatch(new getKitten())->delay(now()->addSeconds(10));
            dispatch(new getKittenGif())->delay(now()->addSeconds(10));
        })->hourly();
        
        $schedule->call(function () {
            //dispatch(new getKitten())->delay(now()->addSeconds(10));
            dispatch(new SearchLikeRtJob())->delay(now()->addSeconds(10));
        })->everyThreeHours();
    }

    /**
     * Register the commands for the application.
     *
     * @return void
     */
    protected function commands()
    {
        $this->load(__DIR__.'/Commands');

        require base_path('routes/console.php');
    }
}
