<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\Article;
use App\Models\TempImage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Intervention\Image\ImageManager;
use Intervention\Image\Drivers\Gd\Driver;
use Illuminate\Support\Facades\File;

class ArticleController extends Controller
{
    public function index(){

        $articles=Article::orderBy('updated_at','desc')->get();

        return response()->json([
            'status'=>true,
            'data'=>$articles
        ]);
    }

    public function show($id){
        $article=Article::find($id);

        if(!$article){
            return response()->json([
                'status'=>false,
                'message'=>'Article not found'
            ]);
        }

        return response()->json([
            'status'=>true,
            'data'=>$article
        ]);
    }


    public function store(Request $request){

        $request->merge([
            'slug'=>Str::slug($request->slug)
        ]);

        $validator=Validator::make($request->all(),[
            'title'=>'required',
            'slug'=>'required|unique:articles,slug',
        ]);

        if($validator->fails()){
            return response()->json([
                'status'=>false,
                'message'=>$validator->errors()
            ]);
        }

        $article=new Article();
        $article->title=$request->title;
        $article->slug=Str::slug($request->slug);
        $article->author=$request->author;
        $article->content=$request->content;
        $article->status=$request->status;

        $articleTempImage=TempImage::find($request->imageId);

        if($articleTempImage){
            $extArray=explode('.',$articleTempImage->name);
            $ext=last($extArray);

            $imageName=strtotime('now').'-'.$article->id.'.'.$ext;

            $manager = new ImageManager(Driver::class);
            $sourcePath = public_path('upload/temp/' . $articleTempImage->name);
            $destinationPath = public_path('upload/articles/small/' . $imageName);
            $image = $manager->read($sourcePath);
            $image->coverDown(500, 600);
            $image->save($destinationPath);


            $destinationPath = public_path('upload/articles/large/' . $imageName);
            $image = $manager->read($sourcePath);
            $image->scaleDown(1200);
            $image->save($destinationPath);

            $article->image=$imageName;
            $article->save();
        }

        $article->save();

        return response()->json([
            'status'=>true,
            'message'=>'Article created successfully'
        ]);
    }

    public function update(Request $request,$id){


        $article=Article::find($id);

        if(!$article){
            return response()->json([
                'status'=>false,
                'message'=>'Article Not Found'
            ]);
        }

        $request->merge([
            'slug'=>Str::slug($request->slug)
        ]);

        $validator=Validator::make($request->all(),[
            'title' => 'required',
            'slug' => 'required|unique:articles,slug,' . $id
        ]);

        if($validator->fails()){
            return response()->json([
                'status'=>false,
                'message'=>$validator->errors()
            ]);
        }

        $article->title=$request->title;
        $article->slug=Str::slug($request->slug);
        $article->author=$request->author;
        $article->content=$request->content;
        $article->status=$request->status;

        $imageId = $request->imageId;
        $temImage = TempImage::find($imageId);


        if($temImage){

            $oldImage=$article->image;

            $extArray = explode('.', $temImage->name);
            $ext = last($extArray);

            $imageName = strtotime('now') . '-' . $article->id . '.' . $ext;

            $manager = new ImageManager(Driver::class);
            $sourcePath = public_path('upload/temp/' . $temImage->name);
            $destinationPath = public_path('upload/articles/small/' . $imageName);
            $image = $manager->read($sourcePath);
            $image->coverDown(500, 600);
            $image->save($destinationPath);


            $destinationPath = public_path('upload/articles/large/' . $imageName);
            $image = $manager->read($sourcePath);
            $image->scaleDown(1200);
            $image->save($destinationPath);

            $article->image = $imageName;
            $article->save();


            if($oldImage){
                File::delete(public_path('upload/articles/small/'.$oldImage));
                File::delete(public_path('upload/articles/large/'.$oldImage));
                // File::delete(public_path('upload/temp/thumb/'.$temImage->name));
                // File::delete(public_path('upload/temp/'.$temImage->name));
            }

        }

        $article->save();

        return response()->json([
            'status'=>true,
            'message'=>'Article Updated Successfully'
        ]);

    }

    public function destroy($id){
        $article=Article::find($id);

        if(!$article){
            return response()->json([
                'status'=>false,
                'message'=>'Article not found'
            ]);
        }

        $article->delete();
        return response()->json([
            'status'=>true,
            'message'=>'Article deleted successfully'
        ]);
    }
}
