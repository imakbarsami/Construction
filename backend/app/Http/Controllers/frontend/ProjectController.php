<?php

namespace App\Http\Controllers\frontend;

use App\Http\Controllers\Controller;
use App\Models\Project;
use Illuminate\Http\Request;

class ProjectController extends Controller
{
    public function index(){

        $projects=Project::where('status',1)->orderBy('id','desc')->get();
        
        return response()->json([
            'status'=>true,
            'data'=>$projects
        ]);
    }
}
