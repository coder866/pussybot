<?php

namespace App\Http\Controllers;

use App\Http\Traits\HttpResponseTrait;
use App\Models\Hashtag;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use phpDocumentor\Reflection\Types\Integer;
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
            return response()->json(Hashtag::all(),200);
    }
   /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     */
    public function getUserTags($userid)
    {
        try {
            $tags=Hashtag::where('user_id',$userid)->get();
            return $this->success("User Tags List",$tags);

        }catch (\Throwable $th)
        {
            return $this->failure($th->getMessage());
        }
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
                'weekday'=>'required|unique:hashtags',
                'tags'=>'required',
                'status'=>'required',
                'user_id'=>'required',
            ], [
                'weekday.required'=>'Weekday Cant be blank',
                'weekday.unique'=>'Weekday Duplicate not allowed',
            ]);
            if($validator->fails()){

                return $this->failure($validator->errors(),422);
            }
            $hashtag=Hashtag::create($request->all());

            return $this->success("HashTag Added Successfully",['tags'=>$hashtag],201);

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
    public function update(Request $request,int $id)
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
            $res=$hashtag->update($request->all());

            return response()->json(['tag'=>$res],201);

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
