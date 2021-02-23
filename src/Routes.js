import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./layout/Home/Home";
import Signin from "./pages/auth/Signin";
import Signup from "./pages/auth/Signup";
import Dashboard from "./pages/Admin/Dasboard";
import FormProduct from "./pages/Admin/DashboardProduct/index.js";
// import DashCategory from "./pages/Admin/DashCategory/Category";
// import DashAbout from "./pages/Admin/DashAbout/About";
// import DashUser from "./pages/Admin/DashUsers/Users";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signin" exact component={Signin} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/admin/dashboard" exact component={Dashboard} />
        <Route path="/dashboard/product" exact component={FormProduct} />
        {/* <Route path="/dashboard/category" exact component={DashCategory} />
        <Route path="/dashboard/about" exact component={DashAbout} />
        <Route path="/dashboard/users" exact component={DashUser} /> */}
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
