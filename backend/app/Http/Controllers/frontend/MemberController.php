<?php

namespace App\Http\Controllers\frontend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class MemberController extends Controller
{
    public function index(){

        $members=DB::table('members')->where('status',1)->get();

        if($members){
            return response()->json([
                'status'=>true,
                'data'=>$members
            ]);
        }else{
            return response()->json([
                'status'=>false,
                'message'=>'No members found'
            ]);
        }
    }
}
