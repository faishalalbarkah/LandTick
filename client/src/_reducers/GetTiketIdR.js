const initialState = {
  datatiketid: [],
  dataErr: "",
  isLoading: false
};

const GetTiketIdR = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ID_TIKET_PENDING":
      return {
        ...state,
        isLoading: true
      };

    case "GET_ID_TIKET_FULFILLED":
      return {
        ...state,
        datatiketid: action.payload.data,
        isLoading: false
      };

    case "GET_ID_TIKET_REJECTED":
      return {
        ...state,
        isLoading: false,
        dataErr: action.payload
      };
    default:
      return state;
  }
};

export default GetTiketIdR;
