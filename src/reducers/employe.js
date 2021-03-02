/* eslint-disable import/no-anonymous-default-export */
export default (employes = [], action) => {
  switch (action.type) {
    case "DELETE":
      return employes.filter((employe) => employe._id !== action.payload);

    case "FETCH_ALL":
      return action.payload;

    case "CREATE":
      return [...employes, action.payload];

    case "UPDATE":
      return employes.map((employe) =>
      employe._id === action.payload._id ? action.payload : employe
      );
    default:
      return employes;
  }
};
