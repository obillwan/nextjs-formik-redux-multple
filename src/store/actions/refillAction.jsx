import {
  ADD_SHIPPING_AMT,
  ADD_COPAY_TOTAL,
} from "../constants/refillConstants";

export function addCopayTotal(copayTotalRedux) {
  return {
    type: ADD_COPAY_TOTAL,
    payload: {
      copayTotalRedux,
    },
  };
}
export function addShippingAmt(shippingAmountRedux) {
  return {
    type: ADD_SHIPPING_AMT,
    payload: {
      shippingAmountRedux,
    },
  };
}
