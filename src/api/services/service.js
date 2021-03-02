import { API } from "../../config";
import axios from "axios";

export const fetchServices = async () => axios.get(`${API}/service/services`);

export const read = async (id) => axios.get(`${API}/service/read/${id}`);

export const createService = (newService) =>
  axios.post(`${API}/service/create`, newService);

export const updateService = (id, updatedService) =>
  axios.patch(`${API}/service/update/${id}`, updatedService);

export const deleteService = (id) =>
  axios.delete(`${API}/service/delete/${id}`);
