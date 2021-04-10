import { request } from "./request";
export function getHomeMultiddata() {
  return request({
    url: "/home/multidata",
  });
}
export function getHomeGoods(type, page) {
  return request({
    url: "/home/data",
    params: {
      type,
      page,
    },
  });
}
