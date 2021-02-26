import { API } from "../../config";
import axios from "axios";

export const sendEmail = () => axios.get(`${API}/send-email`);
