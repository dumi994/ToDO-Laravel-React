@extends('layout.app')

@section('content')
 
 
        
       
<div class="row">
    <div class="col-8 m-auto mt-5">
        <div class="row my-5">
            <div class="col-6 bg-light todo d-flex align-items-center" >
                @include('form.form')
     
            </div>
            <div class="col-6 bg-light done">
            <div class="borderTodo title">
                    <h6 class="text-center   py-2">Da fare | {{$count}}</h6>
                </div>
                
                <div class="row ">
                    <div class="col-12 rowCard">
                     
                        <p  class="my-3">Urgente | {{$countUrg}}</p>
                        <div class="cardContainer">
                            <!-- REACT CARD COMPONENT -->
                             
                            <div id="taskU"  data-tasks-urg="{{ $tasksUrg }}"></div>
                        
                        </div>
                        <!-- <a href="" class="d-flex justify-content-center py-2">
                            <i class="fa-solid fa-plus"></i>
                        </a> -->
                        <hr class="hrGray"/>
                    </div>
                    <div class="col-12 rowCard">
                        <p >Non urgente | {{$countNu}} </p>
                        <div class="cardContainer">
                        <div id="taskNu"  data-tasks-nU="{{ $tasksNu }}"></div>

                          
                        </div>
                        <!-- <a href="" class="d-flex justify-content-center py-2">
                            <i class="fa-solid fa-plus"></i>
                        </a> -->
                        <hr class="hrGray"/>
                    </div>
                </div>
              <!--   <div class="borderDone title">
                    <h6 class="text-center py-2">Completate | 8</h6>
                </div>
                
                <div class="row">
                <div class="col-12  ">
                        <p class="my-3">Urgente | 1</p>
                        <div class="cardContainer">
                            <div class="task taskU">
                                <p class="px-4 py-2">cose da fare</p>
                            </div>
                        </div>
                        <a href="" class="d-flex justify-content-center py-2">
                            <i class="fa-solid fa-plus"></i>
                        </a>
                        <hr class="hrGray"/>
                    </div>
                    <div class="col-12 ">
                        <p>Non urgente | 4 </p>
                        <div class="cardContainer">
                            <div class="task taskNu">
                                <p class="px-4 py-2">cose da fare</p>
                            </div>
                            <div class="task taskNu">
                                <p class="px-4 py-2">cose da fare</p>
                            </div>
                            <div class="task taskNu">
                                <p class="px-4 py-2">cose da fare</p>
                            </div>
                            <div class="task taskNu">
                                <p class="px-4 py-2">cose da fare</p>
                            </div>
                            <div class="task taskNu">
                                <p class="px-4 py-2">cose da fare</p>
                            </div>
                        </div>
                        <a href="" class="d-flex justify-content-center py-2">
                            <i class="fa-solid fa-plus"></i>
                        </a>
                        <hr class="hrGray"/>
                    </div>
                    </div>
                </div>-->
                
        </div> 
    </div>
</div>
@endsection
@section('scripts')
<script src="{{ mix('js/app.js') }}"></script>
@endsection