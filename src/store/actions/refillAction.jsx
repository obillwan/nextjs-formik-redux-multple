import {
  ADD_SHIPPING_AMT,
  ADD_COPAY_TOTAL,
} from "../constants/refillConstants";

export function addCopayTotal(copayTotal) {
  return {
    type: ADD_COPAY_TOTAL,
    payload: {
      copayTotal,
    },
  };
}
export function addShippingAmt(amount) {
  return {
    type: ADD_SHIPPING_AMT,
    payload: {
      amount,
    },
  };
}
