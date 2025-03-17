<?php

namespace App\Http\Controllers\frontend;

use App\Http\Controllers\Controller;
use App\Models\Service;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

class ServiceController extends Controller
{
    public function index(){

        //get all services
        $services=Service::where('status',1)->orderby('id','desc')->get();

        return response()->json([
            'status'=>true,
            'data'=>$services
        ]);
    }


    public function latestServices(Request $request){

        //get latest services
        $services=Service::where('status',1)->orderby('id','desc')->take($request->get('limit'))->get();

        return response()->json([
            'status'=>true,
            'data'=>$services
        ]);
    }


    public function serviceDetails($id){

        $service=DB::table('services')->where(['status'=>1,'id'=>$id])->first();

        if(!$service){
            return response()->json([
                'status'=>false,
                'message'=>'Service not found'
            ]);
        }

        return response()->json([
            'status'=>true,
            'data'=>$service
        ]);
    }
}
