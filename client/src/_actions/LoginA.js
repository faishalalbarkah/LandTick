import axios from "axios";

export const LOGINA = data => {
  return {
    type: "POST_LOGIN",
    payload: axios({
      method: "POST",
      url: "http://localhost:4300/api/v2/login",
      data
    })
  };
};

const token = window.localStorage.getItem("token");
export const cekUser = () => {
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
