import React, { useState } from 'react';
import "../../css/app.css";

const Popup = (props) => {
 /*  const handleDelete = () => {
    props.onConfirm(props.idToDelete);  
 
  }; */

  return (
    <div className={`popup d-flex align-items-center justify-content-center`}>
    {/*   <div className=''>
        <div className="bg-white popupContent d-flex p-5 justify-content-center">
          <div>
            <h5 className="text-center">Sicuro di voler eliminare questa task?</h5>
            <div className="row">
              <div className="col-6">
                <div className="btn btn-danger w-100" onClick={() => handleDelete(props.idToDelete)}>Si</div>


              </div>
              <div className="col-6">
                <div className="btn btn-success w-100" onClick={props.onClick}>No</div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {props.children}
    </div>
  );
}

export default Popup;
