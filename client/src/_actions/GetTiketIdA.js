import axios from "axios";

export const GetTiketIdA = id => {
  const token = localStorage.getItem("token");
  //   console.log("input action", data);
  return {
    type: "GET_ID_TIKET",
    payload: axios({
      method: "GET",
      url: `http://localhost:4300/api/v2/order${id}`,
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  };
};
