import { createProxyMiddleware } from "http-proxy-middleware";

const setupProxy = () => {
  createProxyMiddleware("api", {
    target: "http://43.201.176.26:8080/",
    changeOrigin: true,
  });
};

export default setupProxy;
