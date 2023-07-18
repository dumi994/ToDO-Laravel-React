import React from 'react'

const Form = () => {
  return (
    <div className="container  ">
      <form className="row p-3 "  method="POST" action="{{ route('tasks.store') }}">

        <div className="form-group form-group">
            <label className="active" for="dateStandard">Titolo</label>
            <input className="form-control" type="text" id="title" name="title" />
        </div>
        <div className="mb-3 form-group">
          <label for="exampleFormControlTextarea1" className="form-label ">Task</label>
          <textarea className="form-control" id="newTask" name="description" rows="3"></textarea>
        </div>
        
        <div className="form-group form-group">
            <label className="active" for="dateStandard">Scadenza</label>
            <input type="date" id="deadline" name="deadline" />
        </div>
        <div className="form-group">
        <div className="form-check">
          <input className="form-check-input" type="checkbox" name="priority" id="priority" />
          <label className="form-check-label" for="flexCheckIndeterminate" >
            Urgente
          </label>
        </div>
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">Aggiungi</button>
        </div>
      </form>
    </div>
  )
}

export default Form