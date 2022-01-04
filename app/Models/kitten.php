<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

class kitten extends Model implements HasMedia
{

    use HasFactory,InteractsWithMedia;

    protected $guarded=[];

    public function registerMediaConversions(Media $media = null): void
    {
        $this->addMediaConversion('thumb')
              ->width(368)
              ->height(232)
              ->watermark(public_path('pussyBot.png'))
              ->watermarkOpacity(45)
              ->withResponsiveImages()
              ->sharpen(10);

        $this->addMediaConversion('kitten')
              ->width(720)
              ->height(405)
              ->watermark(public_path('pussyBot.png'))
              ->watermarkOpacity(45)
              ->withResponsiveImages()
              ->sharpen(10);
    }
}



