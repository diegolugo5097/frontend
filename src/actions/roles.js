import * as api from "../api/roles/role";

// actions creators
export const getRoles = () => async (dispatch) => {
  try {
    const { data } = await api.fetchRoles();
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createRole = (role) => async (dispatch) => {
  try {
    const { data } = await api.createRole(role);
    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updateRole = (id, role) => async (dispatch) => {
  try {
    const { data } = await api.updateRole(id, role);
    dispatch({ type: "UPDATE", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteRole = (id) => async (dispatch) => {
  try {
    await api.deleteRole(id);
    dispatch({ type: "DELETE", payload: id });
  } catch (error) {
    console.log(error);
  }
};
