import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./layout/Home/Home";
import Signin from "./pages/auth/Signin";
import Signup from "./pages/auth/Signup";
import Dashboard from "./pages/Admin/Dasboard";
import FormProduct from "./pages/Admin/DashboardProduct/index.js";
import FormCategory from "./pages/Admin/DashboardCategory/index.js";
import FormAbout from "./pages/Admin/DashboardAbout/index.js";
import Detail from "./layout/detail";
import AdminRoute from "./AdminRoute";
import Tshirt from "./layout/desingTShirt";
// import DashUser from "./pages/Admin/DashUsers/Users";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signin" exact component={Signin} />
        <Route path="/signup" exact component={Signup} />
        <AdminRoute path="/admin/dashboard" exact component={Dashboard} />
        <AdminRoute path="/dashboard/product" exact component={FormProduct} />
        <AdminRoute path="/dashboard/category" exact component={FormCategory} />
        <AdminRoute path="/dashboard/about" exact component={FormAbout} />
        <Route path="/product/read/:id" exact component={Detail} />
        <Route path="/desingTshirt" exact component={Tshirt} />
        {/* <Route path="/dashboard/users" exact component={DashUser} /> */}
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
