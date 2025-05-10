<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\TempImage;
use App\Models\Testimonial;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Intervention\Image\ImageManager;
use Intervention\Image\Drivers\Gd\Driver;
use Illuminate\Support\Facades\File;

class TestimonialController extends Controller
{
    public function index(){

        $testimonials = Testimonial::orderBy('id', 'desc')->get();
        return response()->json([
            'status'=>true,
            'data'=>$testimonials
        ]);
    }

    public function show($id){

        $testimonial=Testimonial::find($id);
        if(!$testimonial){
            return response()->json([
                'status'=>false,
                'message'=>'Testimonial not found'
            ]);
        }

        return response()->json([
            'status'=>true,
            'data'=>$testimonial
        ]);
    }

    public function store(Request $request){

        $validator=Validator::make($request->all(),[
            'testimonial'=>'required',
            'citation'=>'required',
            'rating'=>'required|numeric',
        ]);

        if($validator->fails()){
            return response()->json([
                'status'=>false,
                'message'=>$validator->errors()
            ]);
        }

        $testimonial=new Testimonial();
        $testimonial->testimonial=$request->testimonial;
        $testimonial->citation=$request->citation;
        $testimonial->designaiton=$request->designaiton;
        $testimonial->status=$request->status;
        $testimonial->rating=$request->rating;


        $imageId = $request->imageId;
        $temImage = TempImage::find($imageId);

        if ($temImage) {

            $extArray = explode('.', $temImage->name);
            $ext = last($extArray);

            $imageName = strtotime('now') . '-' . $testimonial->id . '.' . $ext;

            $manager = new ImageManager(Driver::class);
            $sourcePath = public_path('upload/temp/' . $temImage->name);
            $destinationPath = public_path('upload/testimonials/small/' . $imageName);
            $image = $manager->read($sourcePath);
            $image->coverDown(500, 600);
            $image->save($destinationPath);


            $destinationPath = public_path('upload/testimonials/large/' . $imageName);
            $image = $manager->read($sourcePath);
            $image->scaleDown(1200);
            $image->save($destinationPath);

            $testimonial->image = $imageName;
            $testimonial->save();

        }

        $testimonial->save();

        return response()->json([
            'status' => true,
            'message' => 'Testimonial Added Successfully'
        ]);
    }
    public function update(Request $request,$id){

        $testimonial=Testimonial::find($id);
        if(!$testimonial){
            return response()->json([
                'status'=>false,
                'message'=>'Testimonial not found'
            ]);
        }

        $validator=Validator::make($request->all(),[
            'testimonial'=>'required',
            'citation'=>'required',
            'rating'=>'required|numeric',
        ]);

        if($validator->fails()){
            return response()->json([
                'status'=>false,
                'message'=>$validator->errors()
            ]);
        }

        $testimonial->testimonial=$request->testimonial;
        $testimonial->citation=$request->citation;
        $testimonial->designaiton=$request->designaiton;
        $testimonial->status=$request->status;
        $testimonial->rating=$request->rating;


        $imageId = $request->imageId;
        $temImage = TempImage::find($imageId);

        if ($temImage) {

            $oldImage=$testimonial->image;

            $extArray = explode('.', $temImage->name);
            $ext = last($extArray);

            $imageName = strtotime('now') . '-' . $testimonial->id . '.' . $ext;

            $manager = new ImageManager(Driver::class);
            $sourcePath = public_path('upload/temp/' . $temImage->name);
            $destinationPath = public_path('upload/testimonials/small/' . $imageName);
            $image = $manager->read($sourcePath);
            $image->coverDown(500, 600);
            $image->save($destinationPath);


            $destinationPath = public_path('upload/testimonials/large/' . $imageName);
            $image = $manager->read($sourcePath);
            $image->scaleDown(1200);
            $image->save($destinationPath);

            $testimonial->image = $imageName;
            $testimonial->save();

            if($oldImage){
                File::delete(public_path('upload/testimonials/small/'.$oldImage));
                File::delete(public_path('upload/testimonials/large/'.$oldImage));
                // File::delete(public_path('upload/temp/thumb/'.$temImage->name));
                // File::delete(public_path('upload/temp/'.$temImage->name));
            }

        }

        $testimonial->save();

        return response()->json([
            'status' => true,
            'message' => 'Testimonial Updated Successfully'
        ]);
    }


    public function destroy($id){

        $testimonial=Testimonial::find($id);

        if(!$testimonial){
            return response()->json([
                'status'=>false,
                'message'=>'Testimonial not found'
            ]);
        }

        $testimonial->delete();
        if($testimonial->image){
            File::delete(public_path('upload/testimonials/small/'.$testimonial->image));
            File::delete(public_path('upload/testimonials/large/'.$testimonial->image));
        }
        return response()->json([
            'status'=>true,
            'message'=>'Testimonial deleted successfully'
        ]);

    }
}
