import axios from "axios";

axios.defaults.withCredentials = true;
const newRequest = axios.create({
  baseURL: "https://bluwberry.onrender.com/api/",
  withCredentials: true,
});

export default newRequest;
