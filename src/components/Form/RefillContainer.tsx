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

function RefillContainer() {
  console.log("In RefillContainer");
  const dispatch = useDispatch();
  const selectedRefill = useSelector(
    (state: RootState) => state.testRefillReducer
  );
  const { amount } = selectedRefill;
  // const [localShippingAmount, setLocalShippingAmount] = useState(0);

  let scripts = [
    {
      id: 1,
      name: "John Smith",
      copay: "15",
      image: "john-smith.jpg",
    },
    {
      id: 2,
      name: "Jane Smith",
      copay: "10",
      image: "jane-smith.jpg",
    },
    // ...
  ];

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
  if (amount) {
    localSelectShippingAmtOption = amount;
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

  const localCopayTotal = getCopayTotal(scripts);
  const localTotalAmount = getTotalAmount(
    getCopayTotal(scripts),
    localSelectShippingAmtOption
  );

  return (
    <div>
      <Link href="/">
        <a>Go back</a>
      </Link>
      <RefillTable scripts={scripts} />
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
