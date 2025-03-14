import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://fullstackchatapp-dbnt.onrender.com",
  withCredentials: true,
});