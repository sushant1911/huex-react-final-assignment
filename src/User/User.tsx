import React, { FC } from "react";
import "./userprofile.css";
import profilepic  from '../components/images/profilepic.png'

const User =()=> {

  return (
    <div className="containerclass">
     
      <div className="photos"><img src={profilepic}></img></div>
      <div className="details">
        <div className="textdetails">
          <span className="displayname classtextbox">Displayname</span>
          <span className="firstname classtextbox">FirstNmae</span>
          <span className="lastname classtextbox">lastName</span>
        </div>
        <div className="inboxcontainer">
          <input
            type="text"
            placeholder="placeholder"
            className="textdisplayname classtextbox"
          ></input>
          <input
            type="text"
            placeholder="placeholder"
            className="textirstname classtextbox"
          ></input>
          <input
            type="text"
            placeholder="placeholder"
            className="textlastname classtextbox"
          ></input>
        </div>
        <div className="yourself">
          yourself
          <input  className="yourselftext"type="text"></input>
        </div>
        <div className="intrestarea">
          your area of intrest
          <div >
            <input type="checkbox" className="checkbox" />
            :designer
          </div>
          <div className="checkbox"> 
            <input type="checkbox" />
            :developer
          </div>
          <div className="checkbox">
            <input type="checkbox" />
            :productManger
          </div>
          <div>
            <input type="checkbox" />
            :Sales
          </div>
        </div>
        <div className="studentorprofesnol">
          Are you student or Professional
          <div>
            <input type="radio" />
            :student
          </div>
          <div>
            <input type="radio" />
            :profesnol
          </div>
        </div>
        <div className="expreandexprt">
          <div className="exprience">
            How Much Of exprience do you have
            <div>
              <input type="radio" />
              0-5
            </div>
            <div>
              <input type="radio" />
              5-10
            </div>
            <div>
              <input type="radio" />
              10andabove
            </div>
            <div className="expertise">
              Expertiese Area
              <div>
                <input type="radio" />
                java
              </div>
              <div>
                <input type="radio" />
                react
              </div>
              <div>
                <input type="radio" />
                Backend
              </div>
            </div>
            <div className="role">
              role
              <div>
                <input type="text" />
              </div>
            </div>
          </div>
        </div>
        <div className="savebutton">
        <button>save</button>
        </div>
      </div>
    </div>
  );
};
export default User;
