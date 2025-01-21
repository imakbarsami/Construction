<?php

use App\Http\Controllers\admin\DashboardController;
use App\Http\Controllers\admin\ProjectController;
use App\Http\Controllers\admin\ServiceController;
use App\Http\Controllers\admin\TempImageController;
use App\Http\Controllers\AuthenticationController;
use App\Http\Controllers\frontend\ServiceController as FrontServiceController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('/temp-image',[TempImageController::class,'store']);
Route::post('/authenticate',[AuthenticationController::class,'authenticate']);
Route::post('/register',[AuthenticationController::class,'register']);
Route::get('/get-services',[FrontServiceController::class,'index']);
Route::get('/get-latest-services',[FrontServiceController::class,'latestServices']);

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

    
   Route::get('/logout',[AuthenticationController::class,'logout']);
});
