<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @method static create(array $data)
 * @method static findorfail(int $id)
 */
class Hashtag extends Model
{
    use HasFactory;
    protected $guarded=[];

}
