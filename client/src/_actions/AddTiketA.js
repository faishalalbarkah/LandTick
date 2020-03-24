import axios from "axios";

export const ADDTIKETA = data => {
  const token = localStorage.getItem("token");
  console.log("input action", data);
  return {
    type: "POST_ADDTIKET",
    payload: axios({
      method: "POST",
      url: "http://localhost:4300/api/v2/addtiket",
      headers: {
        Authorization: `Bearer ${token}`
      },
      data
    })
  };
};
