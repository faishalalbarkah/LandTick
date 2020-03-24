const initialState = {
  datagettiket: [],
  dataErr: [],
  isLoading: false
  // isAdd: false
};

const GETTIKETR = (state = initialState, action) => {
  // console.log(action.payload);
  switch (action.type) {
    case "POST_GETTIKET_PENDING":
      console.log("cek1");
      return {
        ...state,
        isLoading: true
      };

    case "POST_GETTIKET_FULFILLED":
      console.log("cek2", action.payload.data);
      // window.localStorage.getItem("token", action.payload.data.token);
      return {
        ...state,
        datagettiket: action.payload.data,
        isLoading: false
        // isAdd: true
      };

    case "POST_GETTIKET_REJECTED":
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

export default GETTIKETR;
