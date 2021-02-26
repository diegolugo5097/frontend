import { API } from "../../config";
import axios from "axios";

export const fetchProducts = async () => axios.get(`${API}/product/products`);

export const read = async (id) => axios.get(`${API}/product/read/${id}`);

export const createProduct = (newProduct) =>
  axios.post(`${API}/product/create`, newProduct);

export const updateProduct = (id, updatedProduct) =>
  axios.patch(`${API}/product/update/${id}`, updatedProduct);

export const deleteProduct = (id) =>
  axios.delete(`${API}/product/delete/${id}`);
