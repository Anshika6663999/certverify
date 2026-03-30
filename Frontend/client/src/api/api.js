
import axios from "axios";

// environment variable
const API = `${import.meta.env.VITE_API_URL}/api/certificates`;

export const verifyCert = (id) => axios.get(`${API}/${id}`);
export const downloadCert = (id) => window.open(`${API}/download/${id}`);
export const createCert = (data) => axios.post(API, data);
