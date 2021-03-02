/* eslint-disable import/no-anonymous-default-export */
export default (services = [], action) => {
  switch (action.type) {
    case "DELETE":
      return services.filter((service) => service._id !== action.payload);

    case "FETCH_ALL":
      return action.payload;

    case "CREATE":
      return [...services, action.payload];

    case "UPDATE":
      return services.map((service) =>
        services._id === action.payload._id ? action.payload : service
      );
    default: 
      return services;
  }
};
