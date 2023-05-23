import axios from "axios";

const API = axios.create({
  baseURL: "https://seorang.shop/api",
  headers: {
    "Access-Control-Allow-Origin": `https://main--starlit-dango-2f6c05.netlify.app/`,
  },
});

export default API;
