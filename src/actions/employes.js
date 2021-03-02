import * as api from "../api/employes/employe";

// actions creators
export const getEmployes = () => async (dispatch) => {
  try {
    const { data } = await api.fetchEmployes();
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
}; 

export const createEmploye = (employe) => async (dispatch) => {
  try {
    const { data } = await api.createEmploye(employe);
    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updateEmploye = (id, employe) => async (dispatch) => {
  try {
    const { data } = await api.updateEmploye(id, employe);
    dispatch({ type: "UPDATE", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteEmploye = (id) => async (dispatch) => {
  try {
    await api.deleteEmploye(id);
    dispatch({ type: "DELETE", payload: id });
  } catch (error) {
    console.log(error);
  }
};
