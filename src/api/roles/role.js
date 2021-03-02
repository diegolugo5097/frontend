import { API } from "../../config";
import axios from "axios";
 
export const fetchRoles = async () =>
  axios.get(`${API}/role/roles`);

export const createRole = (newRole) =>
  axios.post(`${API}/role/create`, newRole);

export const updateRole = (id, updatedRole) =>
  axios.patch(`${API}/role/update/${id}`, updatedRole);

export const deleteRole = (id) =>
  axios.delete(`${API}/role/delete/${id}`);
