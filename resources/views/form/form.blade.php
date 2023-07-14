<div class="container  ">
  <form class="row p-3 "  method="POST" action="{{ route('tasks.store') }}">
    @csrf
    <div class="form-group form-group">
        <label class="active" for="dateStandard">Titolo</label>
        <input class="form-control" type="text" id="title" name="title">
    </div>
    <div class="mb-3 form-group">
      <label for="exampleFormControlTextarea1" class="form-label ">Task</label>
      <textarea class="form-control" id="newTask" name="description" rows="3"></textarea>
    </div>
    
    <div class="form-group form-group">
        <label class="active" for="dateStandard">Scadenza</label>
        <input type="date" id="deadline" name="deadline">
    </div>
    <div class="form-group">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" name="priority" id="priority">
      <label class="form-check-label" for="flexCheckIndeterminate">
        Urgente
      </label>
    </div>
    </div>
    <div class="col-12">
      <button type="submit" class="btn btn-primary">Aggiungi</button>
    </div>
  </form>
</div>