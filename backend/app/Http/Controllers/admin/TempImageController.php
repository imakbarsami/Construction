<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\TempImage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Intervention\Image\ImageManager;
use Intervention\Image\Drivers\Gd\Driver;

class TempImageController extends Controller
{
    public function store(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'image' => 'required|mimes:jpeg,jpg,png'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'errors' => $validator->errors()
            ]);
        }

        $image = $request->image;
        $ext = $image->getClientOriginalExtension();
        $imageName = strtotime('now'). '-' . rand(1, 100) . '.' . $ext;

        $model = new TempImage();
        $model->name = $imageName;
        $model->save();

        $image->move(public_path('upload/temp/'), $imageName);

        $manager = new ImageManager(Driver::class);
        $sourcePath=public_path('upload/temp/'.$imageName);
        $destinationPath=public_path('upload/temp/thumb/'.$imageName);
        $image = $manager->read($sourcePath);
        $image->coverDown(300,300);
        $image->save($destinationPath);


        return response()->json([
            'status' => true,
            'data' => $model,
            'message' => 'Image uploaded successfully'
        ]);
    }
}
