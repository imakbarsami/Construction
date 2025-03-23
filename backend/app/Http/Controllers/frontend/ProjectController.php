<?php

namespace App\Http\Controllers\frontend;

use App\Http\Controllers\Controller;
use App\Models\Project;
use Illuminate\Http\Request;
use function Laravel\Prompts\table;
use Illuminate\Support\Facades\DB;


class ProjectController extends Controller
{
    public function index(){

        $projects=Project::where('status',1)->orderBy('id','desc')->get();

        return response()->json([
            'status'=>true,
            'data'=>$projects
        ]);
    }

    public function latestProject(Request $request){

        $projects=Project::where('status',1)->orderBy('id','desc')->limit($request->limit)->get();

        return response()->json([
            'status'=>true,
            'data'=>$projects
        ]);
    }

    public function projectDetails($id){

        $project=DB::table('projects')->where('id',$id)->first();

        if($project){
            return response()->json([
                'status'=>true,
                'data'=>$project
            ]);
        }else{
            return response()->json([
                'status'=>false,
                'message'=>'Project not found'
            ]);
        }
    }
}
