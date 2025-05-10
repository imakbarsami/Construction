<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\Service;
use App\Models\TempImage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Intervention\Image\ImageManager;
use Intervention\Image\Drivers\Gd\Driver;

class ServiceController extends Controller
{

    public function index()
    {

        $services = Service::orderBy('updated_at', 'desc')->get();

        return response()->json([
            'status' => true,
            'data' => $services
        ]);
    }

    public function show($id)
    {

        $service = Service::find($id);
        if (!$service) {
            return response()->json([
                'status' => false,
                'message' => 'Service Not Found'
            ]);
        }

        return response()->json([
            'status' => true,
            'data' => $service
        ]);
    }
    public function store(Request $request)
    {

        $request->merge([
            'slug' => Str::slug($request->title)
        ]);

        $validator = Validator::make($request->all(), [
            'title' => 'required',
            'slug' => 'required|unique:services,slug',
        ]);

        if ($validator->passes()) {

            $service = new Service();
            $service->title = $request->title;
            $service->slug = Str::slug($request->slug);
            $service->short_description = $request->short_description;
            $service->content = $request->content;
            $service->status=$request->status;


            $imageId = $request->imageId;
            $temImage = TempImage::find($imageId);

            if ($temImage) {

                $extArray = explode('.', $temImage->name);
                $ext = last($extArray);

                $imageName = strtotime('now') . '-' . $service->id . '.' . $ext;

                $manager = new ImageManager(Driver::class);
                $sourcePath = public_path('upload/temp/' . $temImage->name);
                $destinationPath = public_path('upload/services/small/' . $imageName);
                $image = $manager->read($sourcePath);
                $image->coverDown(500, 600);
                $image->save($destinationPath);


                $destinationPath = public_path('upload/services/large/' . $imageName);
                $image = $manager->read($sourcePath);
                $image->scaleDown(1200);
                $image->save($destinationPath);

                $service->image = $imageName;
                $service->save();

            }

            $service->save();

            return response()->json([
                'status' => true,
                'message' => 'Service Added Successfully'
            ]);
        } else {
            return response()->json([
                'status' => false,
                'errors' => $validator->errors()
            ]);
        }
    }

    public function update(Request $request, $id)
    {

        $service = Service::find($id);

        if (!$service) {
            return response()->json([
                'status' => false,
                'message' => 'Service Not Found'
            ]);
        }

        $validator = Validator::make($request->all(), [
            'title' => 'required',
            'slug' => 'required|unique:services,slug,' . $id
        ]);

        if ($validator->fails()) {

            return response()->json([
                'status' => false,
                'errors' => $validator->errors()
            ]);
        }

        $service->title = $request->title;
        $service->slug = Str::slug($request->slug);
        $service->short_description = $request->short_description;
        $service->content = $request->content;
        $service->status=$request->status;

        $imageId = $request->imageId;

        if ($imageId > 0) {

            $temImage = TempImage::find($imageId);

            if ($temImage) {

                $oldImage = $service->image;
                $extArray = explode('.', $temImage->name);
                $ext = last($extArray);

                $imageName = strtotime('now') . '-' . $service->id . '.' . $ext;

                $manager = new ImageManager(Driver::class);
                $sourcePath = public_path('upload/temp/' . $temImage->name);
                $destinationPath = public_path('upload/services/small/' . $imageName);
                $image = $manager->read($sourcePath);
                $image->coverDown(500, 600);
                $image->save($destinationPath);


                $destinationPath = public_path('upload/services/large/' . $imageName);
                $image = $manager->read($sourcePath);
                $image->scaleDown(1200);
                $image->save($destinationPath);

                $service->image = $imageName;
                if ($oldImage) {
                    File::delete(public_path('upload/services/small/' . $oldImage));
                    File::delete(public_path('upload/services/large/' . $oldImage));
                }

            }
        }

        $service->save();

        return response()->json([
            'status' => true,
            'message' => 'Service Updated Successfully'
        ]);
    }

    public function destroy($id)
    {

        $service = Service::find($id);

        if (!$service) {
            return response()->json([
                'status' => false,
                'message' => 'Service Not Found'
            ]);
        }

        $service->delete();
        if ($service->image) {
            File::delete(public_path('upload/services/small/' . $service->image));
            File::delete(public_path('upload/services/large/' . $service->image));
        }
        
        return response()->json([
            'status' => true,
            'message' => 'Service Deleted Successfully'
        ]);
    }
}
