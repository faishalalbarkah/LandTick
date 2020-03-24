const initialState = {
  datagettiketuser: [],
  dataErr: [],
  isLoading: false
  // isAdd: false
};

const USERTIKETR = (state = initialState, action) => {
  // console.log(action.payload);
  switch (action.type) {
    case "GET_USER_TIKET_PENDING":
      console.log("cek1");
      return {
        ...state,
        isLoading: true
      };

    case "GET_USER_TIKET_FULFILLED":
      console.log("cek2", action.payload.data);
      // window.localStorage.getItem("token", action.payload.data.token);
      return {
        ...state,
        datagettiketuser: action.payload.data,
        isLoading: false
        // isAdd: true
      };

    case "GET_USER_TIKET_REJECTED":
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

export default USERTIKETR;
