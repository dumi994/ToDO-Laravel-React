<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TaskController;
use App\Http\Controllers\HomeController;

use App\Http\Controllers\API\ApiTaskController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [TaskController::class, 'index']);

Route::get('/api-render', function () {
  $formContent = View::make('form')->render();
  return view('datarender', compact('formContent'));
});

/* Route::resource('tasks', TaskController::class); */
Route::post('/tasks', [TaskController::class, 'store'])->name('store');
Route::delete('/api/tasks/{id}', [TaskController::class, 'destroy']);