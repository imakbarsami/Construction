<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;

class AuthenticationController extends Controller
{
    public function authenticate(Request $request){

       $validator=Validator::make($request->all(),[
        'email'=>'required|email',
        'password'=>'required|min:5'
       ]);

       if($validator->passes()){

            $credentials=[
                'email'=>$request->email,
                'password'=>$request->password
            ];

            if(Auth::attempt($credentials)){

                $user=User::find(Auth::id());
                $token=$user->createToken('token')->plainTextToken;

                return response()->json([
                    'status'=>true,
                    'token'=>$token,
                    'message'=>'Login Successfully',
                    'id' =>$user->id
                ]);

            }else{
                return response()->json([
                    'status'=>false,
                    'message'=>'Invalid Credentials'
                ]);
            }

       }else{
          return response()->json([
            'status'=>false,
            'errors'=>$validator->errors()
          ]);

       }
    }

    public function register(Request $request){

        $validator=Validator::make($request->all(),[
               'name'=>'required',
               'email' => 'required|email:rfc,dns|unique:users',
               'password'=>'required|min:5',
               'confirm_password'=>'required|same:password'
        ]);

        if($validator->passes()){
            $user=new User();
            $user->name=$request->name;
            $user->email=$request->email;
            $user->password=bcrypt($request->password);
            $user->save();

            return response()->json([
                'status'=>true,
                'message'=>'User Register Successfully'
            ]);
        }else{

            return response()->json([
                'status'=>false,
                'errors'=>$validator->errors()
            ]);
        }
    }

    public function logout(){

        $user=User::find(Auth::id());
        $user->tokens()->delete();

        return response()->json([
            'status'=>true,
            'message'=>'Logout Successfully'
        ]);
    }
}
