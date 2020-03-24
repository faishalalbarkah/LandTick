const initialState = {
  datadash: [],
  datadashid: [],
  datadashup: [],
  dataErr: "",
  isLoading: false
};

const DashRe = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DASH_PENDING":
      console.log("cek1");
      return {
        ...state,
        isLoading: true
      };

    case "GET_DASH_FULFILLED":
      console.log("cek2", action.payload.data);
      //   window.localStorage.getItem("token", action.payload.data.token);
      return {
        ...state,
        datadash: action.payload.data,
        isLoading: false
        // isAdd: true
      };

    case "GET_DASH_REJECTED":
      console.log("cek3");
      return {
        ...state,
        isLoading: false,
        dataErr: action.payload.response
      };
    //edit
    // case "PATCH_DASH_PENDING":
    //   console.log("cek1");
    //   return {
    //     ...state,
    //     isLoading: true
    //   };

    // case "PATCH_DASH_FULFILLED":
    //   console.log("cek2", action.payload.data);
    //   //   window.localStorage.getItem("token", action.payload.data.token);
    //   return {
    //     ...state,
    //     datadashup: action.payload.data.data,
    //     isLoading: false
    //     // isAdd: true
    //   };

    // case "PATCH_DASH_REJECTED":
    //   console.log("cek3");
    //   return {
    //     ...state,
    //     isLoading: false,
    //     dataErr: action.payload.response
    //   };
    //get id
    case "GET_DASH_ID_PENDING":
      console.log("cek1");
      return {
        ...state,
        isLoading: true
      };

    case "GET_DASH_ID_FULFILLED":
      console.log("cek2", action.payload.data);
      //   window.localStorage.getItem("token", action.payload.data.token);
      return {
        ...state,
        datadashid: action.payload.data.data,
        isLoading: false
        // isAdd: true
      };

    case "GET_DASH_ID_REJECTED":
      console.log("cek3");
      return {
        ...state,
        isLoading: false,
        dataErr: action.payload.response
      };
    default:
      return state;
  }
};

export default DashRe;
