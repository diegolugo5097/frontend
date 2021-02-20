import { API } from "../../config";

export const getAbout = () => {
  return fetch(`${API}/about/about`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
