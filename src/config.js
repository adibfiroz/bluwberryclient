import axios from "axios";

const newRequest = axios.create({
  baseURL: "https://bluwberry.onrender.com/api/",
});

export default newRequest;
