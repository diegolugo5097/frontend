import { API } from "../../config";
import axios from "axios";

export const fetchCategories = async () =>
  axios.get(`${API}/category/categories`);

export const createCategory = (newCategory) =>
  axios.post(`${API}/category/create`, newCategory);

export const updateCategory = (id, updatedCategory) =>
  axios.patch(`${API}/category/update/${id}`, updatedCategory);

export const deleteCategory = (id) =>
  axios.delete(`${API}/category/delete/${id}`);
