import {
  ADD_COPAY_TOTAL,
  ADD_SHIPPING_AMT,
} from "../constants/refillConstants";

const initialState = {
  copayTotalRedux: "10.50",
  shippingAmountRedux: 0,
};
export const refillDetails = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COPAY_TOTAL:
      console.log(action.payload);
      return {
        ...state,
        ...action.payload,
      };
    case ADD_SHIPPING_AMT:
      console.log(action.payload);
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
