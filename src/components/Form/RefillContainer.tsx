import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";
import {
  addShippingAmt,
  addCopayTotal,
} from "../../store/actions/refillAction";
import { RootState } from "../../store/store";
import RefillTable from "./RefillTable";
import RefillTotal from "./RefillTotal";
import { scripts1, scripts2 } from "./RefillUtils";

function RefillContainer() {
  console.log("In RefillContainer");
  const dispatch = useDispatch();
  const selectedRefill = useSelector(
    (state: RootState) => state.testRefillReducer
  );
  const { copayTotalRedux, shippingAmountRedux } = selectedRefill;
  const [flagPage2, setFlagPage2] = useState(false);

  function getCopayTotal(scripts) {
    console.log("In getCopayTotal");
    const result: number = scripts.reduce(
      (total, currentValue) => (total = total + parseFloat(currentValue.copay)),
      0
    );
    // console.log("totalCopay (getCopayTotal): " + result);
    return result;
  }
  function getTotalAmount(copayTotal, shippingAmount) {
    console.log("In getTotalAmount");
    return Number(parseFloat(copayTotal) + parseFloat(shippingAmount));
  }

  const dropdownShippingAmtOptions = [
    { key: "Select an option", value: "" },
    { key: "Overnight", value: "15" },
    { key: "3 Day", value: "5" },
    { key: "7 Day", value: "2" },
  ];

  let localSelectShippingAmtOption = 0;
  if (shippingAmountRedux) {
    localSelectShippingAmtOption = shippingAmountRedux;
  }

  const initialValues = {
    selectShippingAmtOption: localSelectShippingAmtOption,
  };
  const validationSchema = Yup.object({
    selectShippingAmtOption: Yup.string().required("Required"),
  });
  const onSubmit = (values: { selectShippingAmtOption: any }) => {
    localSelectShippingAmtOption = Number(
      parseFloat(values.selectShippingAmtOption)
    );
    dispatch(
      addShippingAmt(Number(parseFloat(values.selectShippingAmtOption)))
    );
  };

  const localCopayTotal = getCopayTotal(
    flagPage2 === false ? scripts1 : scripts2
  );
  const localTotalAmount = getTotalAmount(
    getCopayTotal(flagPage2 === false ? scripts1 : scripts2),
    localSelectShippingAmtOption
  );

  return (
    <div>
      <Link legacyBehavior href="/">
        <a>Go back</a>
      </Link>
      {" | "}
      <Link legacyBehavior href="#">
        <a onClick={(e) => setFlagPage2(false)}>Simiulate Page 1</a>
      </Link>
      {" | "}
      <Link legacyBehavior href="#">
        <a onClick={(e) => setFlagPage2(true)}>Simiulate Page 2</a>
      </Link>{" "}
      <RefillTable scripts={flagPage2 === false ? scripts1 : scripts2} />
      <RefillTotal
        totalCopay={localCopayTotal}
        shippingAmount={localSelectShippingAmtOption}
        totalAmount={localTotalAmount}
      />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ values, errors, setFieldValue }) => (
          <Form>
            <br />
            <FormikControl
              control="select"
              label="Select a shipping amount"
              name="selectShippingAmtOption"
              options={dropdownShippingAmtOptions}
            />
            <br />
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default RefillContainer;

// const [totalCopay, setTotalCopay] = useState(getCopayTotal(scripts));
//   const [prevPosts, setPrevPosts] = useState(scripts);
//   console.log("prevPosts: ");
//   console.log(prevPosts);
//   if (scripts !== prevPosts) {
//     setPrevPosts(scripts);
//     setTotalCopay(getCopayTotal(scripts));
//   }
// let newTotalCopay = 0;
// useEffect(() => {
//   newTotalCopay = getCopayTotal(scripts);
//   setTotalCopay(newTotalCopay);
// }, [scripts]);

// let totalCopay: number = 0;
// scripts.forEach((post: { likeCount: number }) => {
//   if (post.likeCount > 0) {
//     totalCopay = totalCopay + post.likeCount;
//   }
// });

// console.log("getTotalAmount - copayTotal:" + parseFloat(copayTotal)); // 600
// console.log("getTotalAmount - shippingAmount:" + parseFloat(shippingAmount)); // 600
// console.log(
//   "copayTotal + shippingAmount:" +
//     Number(parseFloat(copayTotal) + parseFloat(shippingAmount))
// ); // 600

// function getShippingAmount(amt: number) {
//   let localAmt = 0;
//   if (amt !== undefined) {
//     localAmt = amt;
//   }
//   console.log("In getShippingAmount: " + localAmt);
//   return localAmt;
// }
