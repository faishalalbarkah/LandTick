import axios from "axios";

export const getPaymnentA = id => {
  const token = localStorage.getItem("token");
  return {
    type: "GET_PAYMENT",
    method: "GET",
    payload: axios({
      url: `http://localhost:4300/api/v2/payment/${id}`,
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  };
};
