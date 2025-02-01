<?php

namespace App\Http\Controllers\frontend;

use App\Http\Controllers\Controller;
use App\Models\Testimonial;
use Illuminate\Http\Request;

class TestimonialController extends Controller
{
    public function index(){

        $testimonials=Testimonial::where('status',1)
                            ->orderBy('updated_at','desc')
                            ->get();

        return response()->json([
            'status'=>true,
            'testimonials'=>$testimonials
        ]);
    }

    public function latestTestimonials(Request $request){

        $testimonials=Testimonial::where('status',1)
                        ->orderBy('updated_at','desc')
                        ->take($request->limit)
                        ->get();

        return response()->json([
            'status'=>true,
            'testimonials'=>$testimonials
        ]);
    }
}
