import Axios from "axios";
// import { Redirect } from "react-router-dom";

export const DashAc = data => {
  const token = localStorage.getItem("token");
  return {
    type: "GET_DASH",
    payload: Axios({
      method: "GET",
      url: "http://localhost:4300/api/v2/order",
      headers: {
        Authorization: `Bearer ${token}`
      },
      data
    })
  };
};

export const Dashup = (id, data) => {
  const token = localStorage.getItem("token");
  return {
    type: "PATCH_DASH",
    payload: Axios({
      method: "PATCH",
      url: `http://localhost:4300/api/v2/order/${id}`,
      headers: {
        Authorization: `Bearer ${token}`
      },
      data: data
    })
  };
};

export const DashById = id => {
  const token = localStorage.getItem("token");
  return {
    type: "GET_DASH_ID",
    payload: Axios({
      method: "GET",
      url: `http://localhost:4300/api/v2/order/${id}`,
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  };
};
