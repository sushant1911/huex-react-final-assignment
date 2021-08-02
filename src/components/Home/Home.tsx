import React, { useEffect, useState } from "react";
import "./Home.css";

import { data } from "../Data";

import Cart from "../Cart/Cart";
import { FC } from "react";
import wishlist from '../images/wishlist.png'
import { useStateValue } from  '../Reducer/StateProvider';

import { ICourse } from "../Interface/ICourse";
const Home: FC = () => {
  const [{ basket}, dispatch] = useStateValue();
let totalprice=0;
  const { courses } = data;
  const [cart, setCart] = useState<ICourse[]>([]);
  const name = "sushant";
  console.log(cart);
  const saveCart = (data: ICourse) => {
    const newcart = [...cart];
    newcart.push(data);
    setCart([...newcart]);
    
  };
  const savetoWishlist=(data:ICourse)=>
  {
    dispatch({
      type: "ADD_TO_BASKET",
      item:data
    });
    
  }
 

  return (
    <div className="main"> 
    <div className="row">
      <div className="column">
        {courses.map((data, key) => {
          return (
            <div className="course-container" key={data.id}>
              <label className="image " ></label>
              <label className="title moveup">{data.Tittle}</label>
              <label className="author moveup">{data.Author}</label>
              <label className="wishlist moveup" ><img onClick={()=>savetoWishlist(data)} src={wishlist} /> </label>
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
export default Home;
