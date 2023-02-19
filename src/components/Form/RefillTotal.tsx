import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addShippingAmt,
  addCopayTotal,
} from "../../store/actions/refillAction";
import { RootState } from "../../store/store";

function RefillTotal({ totalCopay, shippingAmount, totalAmount }) {
  console.log("getTotalAmount - shippingAmount:" + parseFloat(shippingAmount)); // 600
  const dispatch = useDispatch();
  const selectedRefill = useSelector(
    (state: RootState) => state.testRefillReducer
  );
  const { copayTotal, amount } = selectedRefill;

  return (
    <div>
      <p>Copay Total: {totalCopay}</p>
      <p>Shipping: {shippingAmount}</p>
      <p>Total: {totalAmount}</p>
    </div>
  );
}

export default RefillTotal;
