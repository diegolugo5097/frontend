import { combineReducers } from "redux";
import products from "./products";
import categories from "./categories";
import abouts from "./aboutUs";

export const reducers = combineReducers({ products, categories, abouts });
