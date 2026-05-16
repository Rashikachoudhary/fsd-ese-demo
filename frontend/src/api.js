import axios from "axios";

const API = axios.create({
  baseURL: "https://fsd-ese-demo.onrender.com",
});

export default API;