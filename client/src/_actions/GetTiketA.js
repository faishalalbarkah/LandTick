import axios from "axios";

export const GETTIKETA = data => {
  //const token = localStorage.getItem("token");
  //   console.log("input action", data);
  return {
    type: "POST_GETTIKET",
    payload: axios({
      method: "GET",
      url: "http://localhost:4300/api/v2/tikett",
      data
    })
  };
};
