<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class DashboardController extends Controller
{
    public function index(){

        //services
        $active_services=DB::table('services')->where('status',1)->count();
        $inactive_services=DB::table('services')->where('status',0)->count();

        //users
        $users=DB::table('users')->count();

        //projects
        $active_projects=DB::table('projects')->where('status',1)->count();
        $inactive_projects=DB::table('projects')->where('status',0)->count();

        //articles
        $active_articles=DB::table('articles')->where('status',1)->count();
        $inactive_articles=DB::table('articles')->where('status',0)->count();

        //testimonials
        $active_testimonials=DB::table('testimonials')->where('status',1)->count();
        $inactive_testimonials=DB::table('testimonials')->where('status',0)->count();

        //members
        $active_members=DB::table('members')->where('status',1)->count();
        $inactive_members=DB::table('members')->where('status',0)->count();


        return response()->json([

            'status'=>true,
            'data'=>[
                'active_services'=>$active_services,
                'inactive_services'=>$inactive_services,
                'users'=>$users,
                'active_projects'=>$active_projects,
                'inactive_projects'=>$inactive_projects,
                'active_articles'=>$active_articles,
                'inactive_articles'=>$inactive_articles,
                'active_testimonials'=>$active_testimonials,
                'inactive_testimonials'=>$inactive_testimonials,
                'active_members'=>$active_members,
                'inactive_members'=>$inactive_members
            ]
        ]);
    }
}
