import axios from "axios";

const API = "http://localhost:5000/api/certificates";

export const verifyCert = (id) => axios.get(`${API}/${id}`);
export const downloadCert = (id) =>
  window.open(`${API}/download/${id}`);
export const createCert = (data) => axios.post(API, data);
