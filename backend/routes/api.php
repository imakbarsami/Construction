<?php

use App\Http\Controllers\admin\ArticleController;
use App\Http\Controllers\admin\DashboardController;
use App\Http\Controllers\admin\ProjectController;
use App\Http\Controllers\admin\ServiceController;
use App\Http\Controllers\admin\TempImageController;
use App\Http\Controllers\AuthenticationController;
use App\Http\Controllers\frontend\ServiceController as FrontServiceController;
use App\Http\Controllers\frontend\ProjectController as FrontProjectController;
use App\Http\Controllers\frontend\ArticleController as FrontArticleController;
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


   Route::get('/logout',[AuthenticationController::class,'logout']);
});
