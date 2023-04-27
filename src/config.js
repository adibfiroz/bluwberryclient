import axios from "axios";

const newRequest = axios.create({
  headers: { Authorization: `Bearer ${access_token}` },
  baseURL: "https://bluwberry.onrender.com/api/",
  withCredentials: true,
  crossDomain: true,
});

export default newRequest;
