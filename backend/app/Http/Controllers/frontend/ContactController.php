<?php

namespace App\Http\Controllers\frontend;

use App\Http\Controllers\Controller;
use App\Mail\ContactEmail;
use App\Models\Contact;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
    public function storeContact(Request $request){

        $validator=Validator::make($request->all(),[
            'name'=>'required',
            'email'=>'required|email'
        ]);

        if($validator->fails()){

            return response()->json([
                'status'=>false,
                'errors'=>$validator->errors()
            ]);
        }

        $contact=new Contact();
        $contact->name=$request->name;
        $contact->email=$request->email;
        $contact->subject=$request->subject;
        $contact->phone=$request->phone;
        $contact->message=$request->message;
        $contact->save();

        $mailData=[
            'name'=>$request->name,
        ];

        Mail::to($contact->email)->send(new ContactEmail($mailData));

        return response()->json([
            'status'=>true,
            'message'=>'Contact message sent successfully'
        ]);
    }
}
