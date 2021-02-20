import { API } from "../../config";

export const getCategories = () => {
  return fetch(`${API}/category/categories`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
