<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\Project;
use App\Models\TempImage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Intervention\Image\ImageManager;
use Intervention\Image\Drivers\Gd\Driver;

class ProjectController extends Controller
{

    public function index(){

        $projects=Project::orderBy('updated_at','desc')->get();

        return response()->json([
            'status'=>true,
            'data'=>$projects
        ]);
    }

    public function store(Request $request){


        $request->merge([
            'slug'=>Str::slug($request->slug)
        ]);

        $validator=Validator::make($request->all(),[

            'title'=>'required',
            'slug'=>'required|unique:projects,slug',
        ]);

        if($validator->passes()){
            $project=new Project();
            $project->title=$request->title;
            $project->slug=Str::slug($request->slug);
            $project->short_description=$request->short_description;
            $project->content=$request->content;
            $project->construction_type=$request->construction_type;
            $project->sector=$request->sector;
            $project->location=$request->location;


            $imageId = $request->imageId;
            $temImage = TempImage::find($imageId);

            if ($temImage) {

                $extArray = explode('.', $temImage->name);
                $ext = last($extArray);

                $imageName = strtotime('now') . '-' . $project->id . '.' . $ext;

                $manager = new ImageManager(Driver::class);
                $sourcePath = public_path('upload/temp/' . $temImage->name);
                $destinationPath = public_path('upload/projects/small/' . $imageName);
                $image = $manager->read($sourcePath);
                $image->coverDown(500, 600);
                $image->save($destinationPath);


                $destinationPath = public_path('upload/projects/large/' . $imageName);
                $image = $manager->read($sourcePath);
                $image->scaleDown(1200);
                $image->save($destinationPath);

                $project->image = $imageName;
                $project->save();

            }

            $project->save();

            return response()->json([
                'status'=>true,
                'message'=>'Project Created Successfully'
            ]);
        }else{
            return response()->json([
                'status'=>false,
                'message'=>$validator->errors()
            ]);
        }


    }

    public function show($id){

        $project=Project::find($id);

        if(!$project){
            return response()->json([
                'status'=>false,
                'message'=>'Project Not Found'
            ]);
        }

        return response()->json([
            'status'=>true,
            'data'=>$project
        ]);
    }

    public function update(Request $request,$id){


        $project=Project::find($id);

        if(!$project){
            return response()->json([
                'status'=>false,
                'message'=>'Project Not Found'
            ]);
        }

        $request->merge([
            'slug'=>Str::slug($request->slug)
        ]);

        $validator=Validator::make($request->all(),[
            'title' => 'required',
            'slug' => 'required|unique:projects,slug,' . $id
        ]);

        if($validator->fails()){
            return response()->json([
                'status'=>false,
                'message'=>$validator->errors()
            ]);
        }

        $project->title=$request->title;
        $project->slug=Str::slug($request->slug);
        $project->short_description=$request->short_description;
        $project->content=$request->content;
        $project->construction_type=$request->construction_type;
        $project->sector=$request->sector;
        $project->location=$request->location;

        $imageId = $request->imageId;
        $temImage = TempImage::find($imageId);


        if($temImage){

            $oldImage=$project->image;

            $extArray = explode('.', $temImage->name);
            $ext = last($extArray);

            $imageName = strtotime('now') . '-' . $project->id . '.' . $ext;

            $manager = new ImageManager(Driver::class);
            $sourcePath = public_path('upload/temp/' . $temImage->name);
            $destinationPath = public_path('upload/projects/small/' . $imageName);
            $image = $manager->read($sourcePath);
            $image->coverDown(500, 600);
            $image->save($destinationPath);


            $destinationPath = public_path('upload/projects/large/' . $imageName);
            $image = $manager->read($sourcePath);
            $image->scaleDown(1200);
            $image->save($destinationPath);

            $project->image = $imageName;
            $project->save();


            if($oldImage){
                File::delete(public_path('upload/projects/small/'.$oldImage));
                File::delete(public_path('upload/projects/large/'.$oldImage));
                // File::delete(public_path('upload/temp/thumb/'.$temImage->name));
                // File::delete(public_path('upload/temp/'.$temImage->name));
            }

        }

        $project->save();

        return response()->json([
            'status'=>true,
            'message'=>'Project Updated Successfully'
        ]);

    }

    public function destroy($id){

        $project=Project::find($id);

        if(!$project){
            return response()->json([
                'status'=>false,
                'message'=>'Project Not Found'
            ]);
        }

        $project->delete();

        return response()->json([
            'status'=>true,
            'message'=>'Project Remove Successfully'
        ]);
    }
}
