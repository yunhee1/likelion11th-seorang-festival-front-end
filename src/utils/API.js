import axios from "axios";

const API = axios.create({
  //   baseURL: "http://43.201.176.26:8080/api",
  headers: {
    "Access-Control-Allow-Origin": `http://localhost:3000/`,
  },
});

export default API;
