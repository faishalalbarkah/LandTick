import axios from "axios";

export const REGISA = data => {
  return {
    type: "REGISTER_POST",
    payload: axios({
      method: "POST",
      url: "http://localhost:4300/api/v2/register",
      data
    })
  };
};

const token = window.localStorage.getItem("token");
export const cekUserRegis = () => {
  return {
    type: "GET_USER",
    payload: axios({
      method: "GET",
      url: "http://localhost:4300/api/v2/user",
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  };
};
