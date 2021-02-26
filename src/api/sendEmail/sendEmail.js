import { API } from "../../config";
import axios from "axios";

export const sendEmail = () => axios.post(`${API}/send-email`);
