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

export const getProduct = async (id) => {
  return await fetch(`${API}/product/${id}`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const addProduct = async (product) => {
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

export const updateProduct = async (productId, product) => {
  console.log(productId);
  return await fetch(`${API}/product/updateProduct/${productId}`, {
    method: "PUT",
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

export const deleteProduct = async (productId) => {
  return await fetch(`${API}/product/deleteProduct/${productId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      console.log(error);
    });
};
