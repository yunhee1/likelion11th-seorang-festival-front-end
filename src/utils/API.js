import axios from "axios";

const API = axios.create({
  baseURL: "https://seorang.shop/api",
  headers: {
    "Access-Control-Allow-Origin": `http://localhost:3000/`,
  },
});

export default API;
