import axios from "axios";

export const USERTIKETA = data => {
  const token = localStorage.getItem("token");
  //   console.log("input action", data);
  return {
    type: "GET_USER_TIKET",
    payload: axios({
      method: "GET",
      url: "http://localhost:4300/api/v2/tiket",
      headers: {
        Authorization: `Bearer ${token}`
      },
      data
    })
  };
};
