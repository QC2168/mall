import axios from "axios";
export function request(config) {
  //1.创建axios的实例
  const instance = axios.create({
    baseURL: "",
    timeout: 50000,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
    },
  });
  //2axios的拦截器
  //2.1请求拦截器的作用
  instance.interceptors.request.use((config) => {
    return config;
  });

  //2.2响应拦截
  instance.interceptors.response.use((res) => {
    return res.data;
  });
  //发送真正的网络请求
  return instance(config);
}
