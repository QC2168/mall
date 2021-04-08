import { request } from "./request";
export function getLogin(username, password) {
  return request({
    method: "post",
    baseURL: "",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    data: `username=${username}&password=${password}`,
  });
}
export function getReqister(username, password, phone, mail, qq) {
  return request({
    method: "post",
    baseURL: "",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    data: `username=${username}&password=${password}&phone=${phone}&mail=${mail}&qq=${qq}`,
  });
}
