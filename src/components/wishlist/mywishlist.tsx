import React, { useEffect, useState } from "react";


import { data } from "../Data";

import Cart from "../Cart/Cart";
import { FC } from "react";
import wishlist from '../images/wishlist.png'

import { ICourse } from "../Interface/ICourse";
import "./wishlist.css";
import { useStateValue } from "../Reducer/StateProvider";
const Mywishlist= () => {
  const [{ basket}, dispatch] = useStateValue();

  const { courses } = data;
  const [cart, setCart] = useState<ICourse[]>([]);
  const name = "sushant";
  console.log(cart);
  const saveCart = (data: ICourse) => {
    const newcart = [...cart];
    newcart.push(data);
    setCart([...newcart]);
    
  };
  
 

  return (
    <div className="main"> 
    <div className="row">
      <div className="column">
        {basket.map((data: ICourse, key: any) => {
          return (
            <div className="course-container" key={data.id}>
              <label className="image " ></label>
              <label className="title moveup">{data.Tittle}</label>
              <label className="author moveup">{data.Author}</label>
              <label className="price moveup">{data.ActualPrice}/-</label>
              <button
                className="addcartbutton moveup"
                type="submit"
                onClick={() => saveCart(data)}
              >
                <div className="addtocartchange">Add To Cart</div>
              </button>
            </div>
          );
        })}
      </div>
    
      <Cart data={cart} />
    </div>
    </div>
  );
  
};
export default Mywishlist;
