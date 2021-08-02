import React, { useState } from "react";
import './cart.css'
import{ICourse} from'../Interface/ICourse'


const Cart = (props: { data:ICourse[]}) => {

  return(
    
    <div className="cart">
      <div className="cart-header ">Your Cart Detail </div>
       {props.data.map((value,key)=>{
       return (
        <div className="basiccontainer">
          <div className="image">
          <label >{value.image}
            </label>
            <div  className="carttittle">
            {value.Tittle}
          </div>
          </div>
         
          <div className="cartprice">
          <label >RS{value.ActualPrice}/-</label>  
          </div>
        </div>
      );
      
      })} 
      <div>Total Price</div></div>
  );
  
}

export default Cart;
