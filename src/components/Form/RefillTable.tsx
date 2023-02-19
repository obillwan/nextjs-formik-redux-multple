import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addShippingAmt,
  addCopayTotal,
} from "../../store/actions/refillAction";
import { RootState } from "../../store/store";

function RefillTable({ scripts }) {
  const dispatch = useDispatch();
  const selectedRefill = useSelector(
    (state: RootState) => state.testRefillReducer
  );
  const { copayTotal, amount } = selectedRefill;

  return (
    <div>
      {scripts?.map((post) => {
        return (
          <div key="{post.id}">
            <h3>
              {post.id} | {post.copay}
            </h3>
          </div>
        );
      })}
    </div>
  );
}

export default RefillTable;
