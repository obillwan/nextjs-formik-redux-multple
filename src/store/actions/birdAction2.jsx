import {
  ADD_BIRD,
  ADD_SHIPPING_AMT,
  ADD_PAYMENT,
  ADD_TOTAL,
  INCREMENT_BIRD,
} from "../constants/birdConstants";

export function addBird(name2) {
  return {
    type: ADD_BIRD,
    payload: {
      name2,
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

export function addPayment(payment) {
  return {
    type: ADD_PAYMENT,
    payload: {
      payment,
    },
  };
}

export function addTotal(total) {
  return {
    type: ADD_TOTAL,
    payload: {
      total,
    },
  };
}

export function incrementBird(bird) {
  return {
    type: INCREMENT_BIRD,
    bird,
  };
}
