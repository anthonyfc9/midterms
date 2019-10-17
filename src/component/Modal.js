
import React from 'react';


function Modal(props){



  window.onclick = function(event) {
    let modal = document.getElementById('modal')
    if (event.target === modal) {
      props.beGone();
    }
  }

let mapKey ='https://www.google.com/maps/embed/v1/place?key=AIzaSyAdFDFmCOJ7nSrXyZuR0F7QAVX7EmshkGc&q='

if(props.spot){
return(  

<div>
  <h1 id='selectSpot'>Select a spot to get started. </h1>
  <div className="modal" id='modal'>
      <div className="modal-content">
       <div className="modal-header">
           <button className='close' onClick={()=>props.beGone()}>X</button>
            <h1>{props.spot.name}</h1>
    </div>
    <div className="modal-body">
   <img className={props.spot.type}/>
   <h3 className='shopsWhy'>Why is this spot amazing?</h3>
    <p>{props.spot.likes}</p>
    <h3 className='shopMenu'>menu</h3>
    <p className='menu'>{props.spot.menu}</p>
    <h1>Address</h1>
    <h3>{props.spot.address}</h3>
    <iframe
    title={props.name}
  width="600"
  height="450"
  frameBorder="0" style={{border: 0}}
  src={mapKey+props.spot.map} allowFullScreen>
</iframe>
    </div>
  </div>
</div>
</div>


)


}else{

  return (
    <h1 id='selectSpot'>Select a spot to get started. </h1>




  
    );
}


}

export default Modal;