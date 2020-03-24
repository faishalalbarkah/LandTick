const initialState = {
  dataRegis: [],
  dataErr: [],
  isLoading: false,
  loginloading: false
};

const REGISR = (state = initialState, action) => {
  switch (action.type) {
    case "REGISTER_POST_PENDING":
      console.log("cek1");
      return {
        ...state,
        isLoading: true
      };

    case "REGISTER_POST_FULFILLED":
      console.log("wakwaw");
      if (action.payload.data) {
        window.localStorage.setItem("token", action.payload.data.token);
      }
      return {
        ...state,
        dataRegis: action.payload,
        isLoading: false,
        loginloading: true
        // error: false
      };
    case "REGISTER_POST_REJECTED":
      console.log("cek3");
      return {
        ...state,
        isLoading: false,
        // error: true,
        dataErr: action.payload
      };
    case "GET_USER_PENDING":
      console.log("cek1");
      return {
        ...state, //titik tiga immutable
        isLoading: true
      };
    case "GET_USER_FULFILLED":
      // const token = window.localStorage.getItem("token");
      return {
        ...state,
        data: action.payload.data.data,
        isLoading: false,
        isLogin: true
        // error: false
      };
    //get user
    case "GET_USER_REJECTED":
      console.log("cek3");
      return {
        ...state,
        isLoading: false,
        error: true,
        dataErr: action.payload.data
      };
    default:
      return state;
  }
};

export default REGISR;
