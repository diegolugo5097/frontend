import { API } from "../../config";

export const getProducts = async () => {
  return await fetch(`${API}/product/products`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const addProduct = async (product) => {
  console.log(product);
  return fetch(`${API}/product/createProduct`, {
    method: "POST",
    headers: {
      Accept: "application/json",
    },
    body: product,
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};
