import React, { FC } from "react";
import { BrowserRouter, Link, Switch } from "react-router-dom";
import cartimage from "../images/cart.png";
import logoimage from "../images/logo.png";
import profileimage from "../images/profile.png";
import "./header.css";

const Header:FC = () => {
  return (
  
        <div className="header">
          <Link to="/" className="logo">
            <img src={logoimage} />
          </Link>
          <div className="header-right">
            <Link to="/">courses</Link>
            <Link to="/mywishlist">Mywishlist</Link>
            <Link to="/cart">
              <img src={cartimage} />
            </Link>
            <Link to="/myUser"> 
              <img src={profileimage} />
            </Link>
          </div>
        </div>
      
  );
};

export default Header;
