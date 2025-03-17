<?php

use App\Http\Controllers\admin\ArticleController;
use App\Http\Controllers\admin\DashboardController;
use App\Http\Controllers\admin\MemberController;
use App\Http\Controllers\admin\ProjectController;
use App\Http\Controllers\admin\ServiceController;
use App\Http\Controllers\admin\TempImageController;
use App\Http\Controllers\admin\TestimonialController;
use App\Http\Controllers\AuthenticationController;
use App\Http\Controllers\frontend\ServiceController as FrontServiceController;
use App\Http\Controllers\frontend\ProjectController as FrontProjectController;
use App\Http\Controllers\frontend\ArticleController as FrontArticleController;
use App\Http\Controllers\frontend\ContactController;
use App\Http\Controllers\frontend\TestimonialController as FrontTestimonialController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::post('/temp-image',[TempImageController::class,'store']);
Route::post('/authenticate',[AuthenticationController::class,'authenticate']);
Route::post('/register',[AuthenticationController::class,'register']);
Route::get('/get-services',[FrontServiceController::class,'index']);
Route::get('/get-latest-services',[FrontServiceController::class,'latestServices']);
Route::get('/get-projects',[FrontProjectController::class,'index']);
Route::get('/get-latest-projects',[FrontProjectController::class,'latestProject']);
Route::get('/get-articles',[FrontArticleController::class,'index']);
Route::get('/get-latest-articles',[FrontArticleController::class,'latestArticles']);
Route::get('/get-testimonials',[FrontTestimonialController::class,'index']);
Route::get('/get-latest-testimonials',[FrontTestimonialController::class,'latestTestimonials']);
Route::post('/contact-me',[ContactController::class,'storeContact']);
Route::get('/get-service/{id}',[FrontServiceController::class,'serviceDetails']);

Route::group(['middleware' => 'auth:sanctum'], function () {
   Route::get('/dashboard',[DashboardController::class,'index']);

   //service routes
   Route::post('/service',[ServiceController::class,'store']);
   Route::get('/services',[ServiceController::class,'index']);
   Route::get('/service/{id}',[ServiceController::class,'show']);
   Route::put('/service/{id}',[ServiceController::class,'update']);
   Route::delete('/service/{id}',[ServiceController::class,'destroy']);

   //project routes
    Route::post('/project',[ProjectController::class,'store']);
    Route::get('/projects',[ProjectController::class,'index']);
    Route::put('/project/{id}',[ProjectController::class,'update']);
    Route::get('/project/{id}',[ProjectController::class,'show']);
    Route::delete('/project/{id}',[ProjectController::class,'destroy']);

    //article routes
    Route::post('/article',[ArticleController::class,'store']);
    Route::get('/articles',[ArticleController::class,'index']);
    Route::get('/article/{id}',[ArticleController::class,'show']);
    Route::put('/article/{id}',[ArticleController::class,'update']);
    Route::delete('/article/{id}',[ArticleController::class,'destroy']);

    //testimonial route
    Route::post('/testimonial',[TestimonialController::class,'store']);
    Route::get('/testimonials',[TestimonialController::class,'index']);
    Route::get('/testimonial/{id}',[TestimonialController::class,'show']);
    Route::put('/testimonial/{id}',[TestimonialController::class,'update']);
    Route::delete('/testimonial/{id}',[TestimonialController::class,'destroy']);

    //member routes
    Route::post('/member',[MemberController::class,'store']);
    Route::get('/members',[MemberController::class,'index']);
    Route::get('/member/{id}',[MemberController::class,'show']);
    Route::put('/member/{id}',[MemberController::class,'update']);
    Route::delete('/member/{id}',[MemberController::class,'destroy']);

   Route::get('/logout',[AuthenticationController::class,'logout']);
});
