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

    public static function getTrendLocations(){
        return collect(Twitter::forApiV1()->getTrendsAvailable())->sort()->random(1)->first();
    }
    public static function getWorldwideTrending(){

        return collect(collect(Twitter::forApiV1()->getTrendsPlace(['id'=>1]))[0]->trends)->sort()->take(5)->implode('name', ', ');
    }
    public static function getTrendingByWoeid($woeid=1){

        return collect(collect(Twitter::forApiV1()->getTrendsPlace(['id'=>$woeid]))[0]->trends)->sort()->take(5)->implode('name', ', ');
    }

    public static function getTrendingRandom(){
        $loc=SELF::getTrendLocations();
        //$lang=SELF::getCountryLanguage($loc->countryCode);
        //$lcode=BotLang::getLangCode($lang);
        $tweetText=SELF::getRandomQuote();

        /**Translate Quote if location language not English */
        // if($lcode !="en"){
        //    $tweetText= SELF::getTranslation($tweetText,$lcode);
        // }
        woeid::create([
            'loc'=>$loc->name,
            'tweet'=>$tweetText,
            'status'=>0
        ]);
        return $tweetText.PHP_EOL.SELF::getTrendingByWoeid($loc->woeid);
    }

    public static function getCountryLanguage($countrycode="KE"){
        $response = Curl::to("https://restcountries.com/v3.1/alpha/{$countrycode}")
        ->asJson()
        ->get();
        $lang=collect(collect($response)->first()->languages)->values()->first();
        
        return $lang;
    }

    public static function getRandomQuote(){
        $quote=Curl::to('https://api.quotable.io/random')
        ->asJson()
        ->get();
         
        $tweetText=$quote->content.' ~'.$quote->author;

        return $tweetText;
    }

    public static function getTranslation($text,$tolanguage)
    {   $headers=array(
            'content-type:application/x-www-form-urlencoded',
            'accept-encoding:application/gzip',
            'x-rapidapi-host:google-translate1.p.rapidapi.com',
            'x-rapidapi-key:baa2e277e5msh8c2a64f1066c557p1f5c29jsn30908b7fdff6'
    );
       $data=[
        'q'=>$text,
        'target'=> $tolanguage,
        'source'=>'en'
       ];
        $response = Curl::to("https://google-translate1.p.rapidapi.com/language/translate/v2")
                    ->withHeaders($headers)
                    ->withData( $data )    
                    ->post();

        //dd($response);

        return collect(collect(json_decode($response))->first()->translations)->first()->translatedText;
    }

    public static function getWorldTweetText(){

        $tweetText=SELF::getRandomQuote().PHP_EOL.SELF::getWorldwideTrending();
        woeid::create([
            'loc'=>'worldwide',
            'tweet'=>$tweetText,
            'status'=>1
        ]);
        return $tweetText;
    }
    public static function getCountryTweetText(){

        return SELF::getTrendingRandom();
    }

    public static function getTweetText(){
        $lastTweet=woeid::all()->last();

        if(!isset($lastTweet)){return SELF::getWorldTweetText();}

        $diff=Carbon::parse($lastTweet->updated_at)->diffInHours(Carbon::now());

        if($diff>=2){
            return SELF::getWorldTweetText();
        }else{
            return SELF::getCountryTweetText();

        }

    }

}