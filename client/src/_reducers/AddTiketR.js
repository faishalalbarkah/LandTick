const initialState = {
  datatiket: [],
  dataErr: [],
  isLoading: false,
  isAdd: false
};

const ADDTIKETR = (state = initialState, action) => {
  // console.log(action.payload);
  switch (action.type) {
    case "POST_ADDTIKET_PENDING":
      console.log("cek1");
      return {
        ...state,
        isLoading: true
      };

    case "POST_ADDTIKET_FULFILLED":
      console.log("cek2");
      return {
        ...state,
        datatiket: action.payload.data,
        isLoading: false,
        isAdd: true
      };

    case "POST_ADDTIKET_REJECTED":
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

export default ADDTIKETR;
