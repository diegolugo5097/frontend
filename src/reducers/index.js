import { combineReducers } from "redux";
import products from "./products";
import categories from "./categories";
import abouts from "./aboutUs";
import services from "./services";
import users from "./users";
export const reducers = combineReducers({ products, categories, abouts, services, users });
