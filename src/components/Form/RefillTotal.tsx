import React, { useEffect, useState } from "react";

function RefillTotal({ totalCopay, shippingAmount, totalAmount }) {
  console.log("getTotalAmount - shippingAmount:" + parseFloat(shippingAmount)); // 600

  return (
    <div>
      <p>Copay Total: {totalCopay}</p>
      <p>Shipping: {shippingAmount}</p>
      <p>Total: {totalAmount}</p>
    </div>
  );
}

export default RefillTotal;
