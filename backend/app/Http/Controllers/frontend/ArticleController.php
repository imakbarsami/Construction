<?php

namespace App\Http\Controllers\frontend;

use App\Http\Controllers\Controller;
use App\Models\Article;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ArticleController extends Controller
{
    public function index(){

        $artcles=Article::where('status',1)->orderBy('updated_at','desc')->get();

        return response()->json([
            'status' => true,
            'data' => $artcles
        ]);
    }

    public function latestArticles(Request $request){

        $artcles=Article::where('status',1)->orderBy('updated_at','desc')->take($request->limit)->get();

        return response()->json([
            'status' => true,
            'data' => $artcles
        ]);
    }

    public function articleDetails($id){

        $article=DB::table('articles')
                    ->where('id',$id)
                    ->where('status',1)
                    ->first();

        if($article){
            return response()->json([
                'status' => true,
                'data' => $article
            ]);
        }else{
            return response()->json([
                'status' => false,
                'message' => 'Article not found'
            ]);
        }
    }
}
