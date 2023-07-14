<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Http\Request;
use DB;
use DateTime;
class TaskController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function home()
    {
        return view("welcome");
    }
   
    public function index()
    {   
        /* AGGIORNO PRIORITA' IN BASE ALL ADATA */
        $tasks = DB::table('tasks')->get();
        $currentDay = new DateTime();
 
        foreach ($tasks as $task) {
                $deadline = new DateTime($task->deadline);

                if ($deadline->format('Y-m-d') == $currentDay->format('Y-m-d') && $deadline->format('Y-m-d') >= $currentDay->format('Y-m-d') && $task->priority == 0) {
                    DB::table('tasks')
                    ->where('id', $task->id)
                    ->update(['priority' => 1]);         
                }
            }
        /* PRENDO LE TASK URGENTI */
        $tasksUrg = Task::where('priority', 1)->get();

        /* PRENDO LE TASK NON URGENTI */
        $tasksNu = Task::where('priority', 0)->get();
         
        /* Conto tutte le task */
        $count = DB::table('tasks')->count();
        /* Conto solo le task urgenti*/
        $countUrg = DB::table('tasks')->where('priority', 1)->count();
        /* Conto solo le task Non urgenti*/
        $countNu = DB::table('tasks')->where('priority', 0)->count();
        
        return view('welcome', [ 'tasksUrg' => $tasksUrg, 'tasksNu' => $tasksNu,'count' => $count, 'countUrg' => $countUrg,'countNu' => $countNu,]);
       /*  return response()->json([
            'tasksUrg' => $tasksUrg,
            'tasksNu' => $tasksNu,
            'count' => $count,
            'countUrg' => $countUrg,
            'countNu' => $countNu,
        ]); */
    }

   
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
       
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {   
         
        $task = new Task;
        $task->title = $request->title;
        $task->description = $request->description;
        $task->deadline = $request->deadline;
        $task->status= 0;
        
        if($request->priority !== false && $request->priority !== 0){
            $task->priority = 0;
        } else {
            $task->priority = 1;
        }
        $task->save();
        return redirect('/tasks');


    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Task  $task
     * @return \Illuminate\Http\Response
     */
    public function show(Task $task)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Task  $task
     * @return \Illuminate\Http\Response
     */
    public function edit(Task $task)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Task  $task
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $taks = Task::find($id);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Task  $task
     * @return \Illuminate\Http\Response
     */
    public function destroy(Task $task)
    {
        //
    }
}
