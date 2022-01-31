<?php

namespace App\Http\Controllers;

use App\Http\Traits\HttpResponseTrait;
use App\Models\Hashtag;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Throwable;

class HashTagsController extends Controller
{
    use HttpResponseTrait;
    public function store(Request $request)
    {
        try {

            $validator=Validator::make($request->all(),[
                'weekday'=>'required',
                'tags'=>'required',
                'status'=>'required',
                'user_id'=>'required',
            ]);
            if($validator->fails()){
                return response()->json($validator->errors(),422);
            }
//            $request->validate([
//                'weekday'=>'required',
//                'tags'=>'',
//                'status'=>'',
//            ]);

            $hashtag=Hashtag::create($request->all());
            return response()->json($hashtag,201);

        }catch (Throwable $th){
            return response([$th->getMessage()]);
        }
    }
}
