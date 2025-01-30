<?php

namespace App\Http\Controllers\frontend;

use App\Http\Controllers\Controller;
use App\Models\Article;
use Illuminate\Http\Request;

class ArticleController extends Controller
{
    public function getArticles(){

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
}
