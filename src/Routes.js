import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./layout/Home/Home";
import Signin from "./pages/auth/Signin";
import Signup from "./pages/auth/Signup";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signin" exact component={Signin} />
        <Route path="/signup" exact component={Signup} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
