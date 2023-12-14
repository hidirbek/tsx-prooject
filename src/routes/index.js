import React from "react";
import { Route, Switch } from "react-router-dom";
import Register from "../pages/register/Register";
import Home from "../pages/home/Home";

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
      </Switch>
    </div>
  );
};

export default index;
