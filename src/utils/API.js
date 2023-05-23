import axios from "axios";

const host =
  window.location.hostname === "localhost"
    ? "http://43.201.176.26:8080/api"
    : "http://43.201.176.26:8080/api/:splat 200";

const API = axios.create({
  baseURL: host,
  headers: {
    "Access-Control-Allow-Origin": `http://localhost:3000/`,
  },
});

export default API;
