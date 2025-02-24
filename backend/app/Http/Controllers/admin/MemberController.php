<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\Member;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;
use Intervention\Image\ImageManager;
use Intervention\Image\Drivers\Gd\Driver;
use Illuminate\Support\Facades\File;

class MemberController extends Controller
{
    public function index(){

        $members=DB::table('members')->orderBy('updated_at','desc')->get();

        if($members->isEmpty()){
            return response()->json([
                'status'=>false,
                'message'=>'Members not found'
            ]);
        }

        return response()->json([
            'status'=>true,
            'data'=>$members
        ]);

    }

    public function store(Request $request){

        $validator=Validator::make($request->all(),[
            'name'=>'required',
            'job_title'=>'required',
        ]);

        if($validator->fails()){

            return response()->json([
                'status'=>true,
                'errors'=>$validator->errors()
            ]);
        }

        $imageId=$request->imageId;
        $imageName='';

        $memberTempImage=DB::table('temp_images')->where('id',$imageId)->first();

        if($memberTempImage){

            $extArray=explode('.',$memberTempImage->name);
            $ext=end($extArray);
            $imageName=strtotime('now').'.'.$ext;

            $manager = new ImageManager(Driver::class);
            $sourcePath = public_path('upload/temp/' . $memberTempImage->name);
            $destinationPath = public_path('upload/members/small/' . $imageName);
            $image = $manager->read($sourcePath);
            $image->coverDown(500, 600);
            $image->save($destinationPath);


            $destinationPath = public_path('upload/members/large/' . $imageName);
            $image = $manager->read($sourcePath);
            $image->scaleDown(1200);
            $image->save($destinationPath);

        }

        DB::table('members')->insert([
            'name'=>$request->name,
            'job_title'=>$request->job_title,
            'linkdin_url'=>$request->linkdin_url,
            'image'=>$imageName,
            'created_at'=>now(),
            'updated_at'=>now()
        ]);

        return response()->json([
            'status'=>true,
            'message'=>'Member added successfully'
        ]);
    }

    public function show($id){

        $member=DB::table('members')->where('id',$id)->first();

        if(!$member){
            return response()->json([
                'status'=>false,
                'message'=>'Member not found'
            ]);
        }

        return response()->json([
            'status'=>true,
            'data'=>$member
        ]);
    }

    public function update(Request $request,$id){

        $member = DB::table('members')->where('id', $id)->first();

        if(!$member){
            return response()->json([
                'status'=>false,
                'message'=>'Member not found'
            ]);
        }

        $validator=Validator::make($request->all(),[
            'name'=>'required',
            'job_title'=>'required',
        ]);

        if($validator->fails()){

            return response()->json([
                'status'=>true,
                'errors'=>$validator->errors()
            ]);
        }

        $imageId=$request->imageId;
        $imageName='';

        $memberTempImage=DB::table('temp_images')->where('id',$imageId)->first();

        if($memberTempImage){

            $extArray=explode('.',$memberTempImage->name);
            $ext=end($extArray);
            $imageName=strtotime('now').'.'.$ext;

            $manager = new ImageManager(Driver::class);
            $sourcePath = public_path('upload/temp/' . $memberTempImage->name);
            $destinationPath = public_path('upload/members/small/' . $imageName);
            $image = $manager->read($sourcePath);
            $image->coverDown(500, 600);
            $image->save($destinationPath);


            $destinationPath = public_path('upload/members/large/' . $imageName);
            $image = $manager->read($sourcePath);
            $image->scaleDown(1200);
            $image->save($destinationPath);

        }

        $oldImage = $member->image;

        DB::table('members')->where('id', $id)->update([
            'name' => $request->name,
            'job_title' => $request->job_title,
            'linkdin_url' => $request->linkdin_url,
            'image' => $imageName,
            'updated_at' => now()
        ]);

        if($oldImage){
            File::delete(public_path('upload/members/small/'.$oldImage));
            File::delete(public_path('upload/members/large/'.$oldImage));
        }

        return response()->json([
            'status'=>true,
            'message'=>'Member updated successfully'
        ]);
    }


    public function destroy($id){

        $member = DB::table('members')->where('id', $id)->first();

        if(!$member){
            return response()->json([
            'status'=>false,
            'message'=>'Member not found'
            ]);
        }

        DB::table('members')->where('id', $id)->delete();

        return response()->json([
            'status'=>true,
            'message'=>'Member deleted successfully'
        ]);
    }
}
