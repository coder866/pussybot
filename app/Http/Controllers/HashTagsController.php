<?php

namespace App\Http\Controllers;

use App\Http\Traits\HttpResponseTrait;
use App\Models\Hashtag;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Validator;
use Throwable;

class HashTagsController extends Controller
{
    use HttpResponseTrait;
    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     */
    public function index()
    {
        return response()->json(['data'=>Hashtag::all()],200);
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return JsonResponse
     */
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
            $hashtag=Hashtag::create($request->all());
            return response()->json(['tag'=>$hashtag],201);

        }catch (Throwable $th){
            return response()->json([$th->getMessage()],500);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param  int  $id
     * @return JsonResponse
     */
    public function update(Request $request, $id)
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

            $hashtag=Hashtag::findorfail($id);

            $hashtag->update($request->all());

            return response()->json(['tag'=>$hashtag],201);

        } catch (throwable $th) {
            return response()->json(['message'=>$th->getMessage()],500) ;
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return Response
     */
    public function destroy($id)
    {
        //
    }
}
