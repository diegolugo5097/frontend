import { API } from "../../config";
import axios from "axios";

export const fetchEmployes = async () => axios.get(`${API}/employe/employes`);

export const read = async (id) => axios.get(`${API}/employe/read/${id}`);

export const createEmploye = (newEmploye) =>
  axios.post(`${API}/employe/create`, newEmploye);

export const updateEmploye = (id, updatedEmploye) =>
  axios.patch(`${API}/employe/update/${id}`, updatedEmploye);

export const deleteEmploye = (id) =>
  axios.delete(`${API}/employe/delete/${id}`);  
 