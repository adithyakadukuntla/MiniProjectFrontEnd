import React from "react";
import { useNavigate } from 'react-router-dom';

function Product(props) {

  let navigate = useNavigate();

  function showDetails() {
    navigate('/details', { state: props.proObj });
  }  

  return (
    <div className=" p-2">
 

      <div class="col p-1  h-100   ">
        <div class="card h-100  p-2 shadow-lg rounded-4  gap-2  ">
          <img
            src={props.proObj.image}
            class="card-img-top w-75 p-1  mx-auto"
            alt="..."
          />
          <div class="card-body text-center">
            <h5 class="card-title text-center">{props.proObj.title}</h5>
            <p class="card-text text-left">Price : ${props.proObj.price}</p>
           <button className="btn btn-success  text-center" onClick={showDetails} >Details</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
