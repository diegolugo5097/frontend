/* eslint-disable import/no-anonymous-default-export */
export default (categories = [], action) => {
  switch (action.type) {
    case "DELETE":
      return categories.filter((category) => category._id !== action.payload);

    case "FETCH_ALL":
      return action.payload;

    case "CREATE":
      return [...categories, action.payload];

    case "UPDATE":
      return categories.map((category) =>
        category._id === action.payload._id ? action.payload : category
      );
    default:
      return categories;
  }
};
