const initialState = {
  id: null
};

export const IdPayment = (state = initialState, action) => {
  switch (action.type) {
    case "ID":
      return {
        id
      };

    default:
      break;
  }
};
