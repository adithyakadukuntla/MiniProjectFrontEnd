import "./Details.css";

import React from "react";
import { useLocation } from 'react-router-dom';

  
function Details(){

  const { state } = useLocation()
  function goBack() {
    window.history.go(-1); // This navigates back by one step in the history
  }

  
  return (
    <div className='pt-5' >
      <div className='container pt-3'>
        <div className='row justify-content-center bg-secondary text-white p-4 pb-2 rounded-4'>
          <div className='col-lg-6'>
            <img
              src={state.image}
              style={{
                width: '100%',
                maxWidth: 350,
                height: 'auto',
                padding:'20px 20px',
                border: '2px solid #ddd', 
                borderRadius: '8px', 
              }}
              className='rounded-4 mb-4'
              alt=''
            />
          </div>
          <div className='col-lg-6'>
            <h2>Title: {state.title}</h2>
            <p className='mb-4 display-5'>Price: {state.price}</p>
            <p className='mb-4 '>Description: {state.description}</p>
            <p className='mb-4 display-4'>Rating: {state.rating.rate}</p>
            <p className='mb-4 display-4'>Count: {state.rating.count}</p>
            <button className="btn btn-light" >Add to Cart</button>
          </div>
        </div>
        <div className="pt-3 text-center" ><button className="btn btn-danger" onClick={goBack}  >Back</button></div>
      </div>
    </div>

  );
}

export default Details;
