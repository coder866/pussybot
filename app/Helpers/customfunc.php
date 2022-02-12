<?php

namespace App\Helpers;

use App\Models\woeid;
use Atymic\Twitter\Facade\Twitter;
use Ixudra\Curl\Facades\Curl;
use BotLang;
use Carbon\Carbon;
use Carbon\CarbonInterface;
use Nette\Utils\Json;

class customfunc
{
    public static function shout(string $string)
    {
        return strtoupper($string);
    }

    public static function getTrendLocations()
    {
        return collect(Twitter::forApiV1()->getTrendsAvailable())->sort()->random(1)->first();
    }
    public static function getWorldwideTrending()
    {

        return collect(collect(Twitter::forApiV1()->getTrendsPlace(['id' => 1]))[0]->trends)->sort()->take(5)->implode('name', ', ');
    }
    public static function getTrendingByWoeid($woeid = 1)
    {

        //return collect(collect(Twitter::forApiV1()->getTrendsPlace(['id'=>$woeid]))[0]->trends)->sort()->take(5)->implode('name', ', ');
        return collect(collect(Twitter::forApiV1()->getTrendsPlace(['id' => $woeid]))[0]->trends)->sort()->random(5)->implode('name', ', ');
    }

    public static function getTrendingKe()
    {
        // $tweetText= SELF::getRandomZenQuote().PHP_EOL.SELF::getTrendingByWoeid(1528488).",#CatLove";
        $tweetText =
            SELF::getRandomZenQuote() . PHP_EOL . "#InspiredKitty,#KittyLove,#Kitty,#CatsOfTwitter,#MasculinitySaturday,#Catarday,#CatLove,#BlackBoxThinking";
        woeid::create([
            'loc' => 'kenya',
            'tweet' => $tweetText,
            'status' => 0
        ]);



        return $tweetText;
    }

    public static function getTrendingRandom()
    {
        $loc = SELF::getTrendLocations();
        //$lang=SELF::getCountryLanguage($loc->countryCode);
        //$lcode=BotLang::getLangCode($lang);
        $tweetText = SELF::getRandomQuote();

        /**Translate Quote if location language not English */
        // if($lcode !="en"){
        //    $tweetText= SELF::getTranslation($tweetText,$lcode);
        // }
        woeid::create([
            'loc' => $loc->name,
            'tweet' => $tweetText,
            'status' => 0
        ]);
        return
            $tweetText . PHP_EOL . SELF::getTrendingByWoeid($loc->woeid) . ",#MotivationMonday,#MeowMonday,#CatLove,#BlackBoxThinking,#Purrrr";
    }

    public static function getCountryLanguage($countrycode = "KE")
    {
        $response = Curl::to("https://restcountries.com/v3.1/alpha/{$countrycode}")
            ->asJson()
            ->get();
        $lang = collect(collect($response)->first()->languages)->values()->first();

        return $lang;
    }

    public static function getRandomQuote()
    {
        $quote = Curl::to('https://api.quotable.io/random')
            ->asJson()
            ->get();

        $tweetText = $quote->content . ' ~' . $quote->author;

        return $tweetText;
    }

    public static function getRandomZenQuote()
    {
        $keyword = SELF::getRandomKeyword();

        $quote = Curl::to("https://zenquotes.io/api/random/{$keyword}")
            ->asJson()
            ->get();
        $qresp = collect($quote)->first();


        $tweetText = $qresp->q . '~' . $qresp->a;

        return $tweetText;
    }


    public static function getTranslation($text, $tolanguage)
    {
        $headers = array(
            'content-type:application/x-www-form-urlencoded',
            'accept-encoding:application/gzip',
            'x-rapidapi-host:google-translate1.p.rapidapi.com',
            'x-rapidapi-key:baa2e277e5msh8c2a64f1066c557p1f5c29jsn30908b7fdff6'
        );
        $data = [
            'q' => $text,
            'target' => $tolanguage,
            'source' => 'en'
        ];
        $response = Curl::to("https://google-translate1.p.rapidapi.com/language/translate/v2")
            ->withHeaders($headers)
            ->withData($data)
            ->post();

        //dd($response);

        return collect(collect(json_decode($response))->first()->translations)->first()->translatedText;
    }

    public static function getWorldTweetText()
    {

        $tweetText = SELF::getRandomQuote() . PHP_EOL . SELF::getWorldwideTrending() . ",#MotivationMonday,#MeowMonday,#CatLove,#MondayMadness,#Purrrr";
        woeid::create([
            'loc' => 'worldwide',
            'tweet' => $tweetText,
            'status' => 1
        ]);
        return $tweetText;
    }
    public static function getCountryTweetText()
    {

        return SELF::getTrendingRandom();
    }

    public static function getTweetText()
    {
        // $Tweets=woeid::all()->sortByDesc('created_at')->take(2);

        // $lastTweet=$Tweets->last();
        // //dd($lastTweet);
        // if(!isset($Tweets)){return SELF::getWorldTweetText();}

        // $diff=Carbon::parse($lastTweet->created_at)->diffInHours(Carbon::now());

        // if($diff>=2){
        //     return SELF::getWorldTweetText();
        // }else{
        //     $hasKe=$Tweets->pluck('loc')->values()->contains('kenya');
        //     if(!$hasKe){
        //         return SELF::getTrendingKe();
        //     }
        //     return SELF::getCountryTweetText();

        // }
        return SELF::getTrendingKe();
    }

    public static function getRandomKeyword()
    {
        $keywordSato = collect(
            [
                'Inspiration',
                'Leadership',
                'Anxiety',
                'Change',
                'Choice',
                'Courage',
                'Death',
                'Dreams',
                'Excellence',
                'Pain',
                'Past',
                'Time',

            ]
        );
        $keywordSunday = collect(
            [
                'Inspiration',
                'Leadership',
                'Dreams',
                'Confidence',
                'Courage',
                'Forgiveness',
                'Freedom',
                'Happiness',
                'Inspiration',
                'Kindness',
                'Love',
            ]
        );
        $keyword = collect([
            'Anxiety',
            'Change',
            'Choice',
            'Confidence',
            'Courage',
            'Death',
            'Dreams',
            'Excellence',
            'Failure',
            'Fairness',
            'Fear',
            'Forgiveness',
            'Freedom',
            'Future',
            'Happiness',
            'Inspiration',
            'Kindness',
            'Leadership',
            'Life',
            'Living',
            'Love',
            'Pain',
            'Past',
            'Time',
            'Today',
            'Success',
            'Truth',
            'Work'
        ]);
        return $keyword->random(1)->first();
    }

    public static function seachTweet()
    {
        //https://api.twitter.com/2/tweets/search/recent

        $response = Curl::to("https://api.twitter.com/2/tweets/search/recent")
            ->withBearer(env('TWITTER_BEARER_TOKEN'))
            ->get();

        dd($response);
    }

    public static function tweetSearch()
    {
        #wednesdaywisdom
        $twts = collect($results->statuses)->unique('id')->random(5);
        $results = Twitter::forApiV1()->getSearch(["q" => "#MasculinitySaturday OR #Catarday  OR #Gratefull OR #Wellness OR #Happiness OR #Purposeful OR
        #Kitty OR #MentalHealth OR #CatsofTwitter OR #CatLove OR #Love OR #Fruitfull OR #Truthful OR #Peace OR
        #Peaceful OR #Blessings OR #Catarday OR #Hope OR #Faithfullness OR #HisLoveEnduresForever
        #Leadership OR #Wisdom OR #BlackBoxThinking OR Cats OR #Strength OR #Future OR #Thankfulness OR #Hope OR #
        Hopefull OR #Thankfull OR #PowerOfTheCross
        -has:media,lang:en"]);

        // $Rtresp=Twitter::forApiV1()->postRt($twt->id);
        // $FVresp=Twitter::forApiV1()->postFavorite(['id'=>$twt->id]);

        //dd($twts);
        return $twts;
    }
}
