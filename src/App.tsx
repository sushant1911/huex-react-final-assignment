import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";

import Header from "./components/Header/Header";
import FooterWrapper from "./components/footer/Footer";
import Banner from "./components/Banner/banner";
import Home from "./components/Home/Home";
import User from "./User/User";
import Mywishlist from "./components/wishlist/mywishlist";
import Cart from "./components/Cart/Cart";
import { createHook } from "async_hooks";
import Search from "./components/Search/serch";
const App: React.FC = () => {
  return (
    <Router>
      <Header></Header>
      <Banner></Banner>
      <Switch>
        <Route path="/myUser">
          <User />
        </Route>
        <Route path="/cart">
          <Mywishlist></Mywishlist>
        </Route>
        <Route path="/mywishlist">
          <Mywishlist />
        </Route>
        <Route path="/">
          <div className="serchandsort">
            <div className="sort sotingadjust ">
              <select name="Courset" id="cars">
                <option value="claue">CoursePrise</option>
                <option value="value">Low To High</option>
                <option value="mevalue ">High To Low</option>
              </select>
            </div>
            <div className="serch serchadjust">
              <div className="serch">
                <input type="text" placeholder="serch"></input>
              </div>
            </div>
          </div>

          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
