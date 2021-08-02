import React, { FC } from "react";
import { render } from "react-dom";
import "./banner.css";
import bannerimage from "../images/bannerimage.png";
const Banner :FC=()=>  {
  
    return (
      <div className="bannercontainer">
        <div className="body">
        <label className="banner-text">Discover letest courses on </label>
       <label className="banner-text">React</label>
      <img src={bannerimage}className="imagecontain"></img>
    </div>
    </div>
    );
}
export default Banner;
