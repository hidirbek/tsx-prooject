import React from "react";
import { Route, Switch } from "react-router-dom";
import Register from "../pages/register/Register";
import Home from "../pages/home/Home";
import Pdp from "../pages/pdp/Pdp";
import Poster from "../pages/poster/Poster";
import ChoosingCategory from "../pages/choosingCategory/ChoosingCategory";
import AboutPostingProd from "../pages/aboutPostingProd/AboutPostingProd";

const index = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/about_product">
          <Pdp />
        </Route>
        <Route exact path="/post_products">
          <Poster />
        </Route>
        <Route exact path="/choose_category">
          <ChoosingCategory />
        </Route>
        <Route exact path="/about_postingProd">
          <AboutPostingProd />
        </Route>
      </Switch>
    </div>
  );
};

export default index;
