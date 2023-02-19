import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";
import { useDispatch, useSelector } from "react-redux";
import {
  addBird,
  addShippingAmt,
  addPayment,
  addTotal,
} from "../../store/actions/birdAction2";
import { RootState } from "../../store/store";

function FormikContainer() {
  const dispatch = useDispatch();
  const selectedBirdName = useSelector((state: RootState) => state.testBirds2);
  const { name2, amount, payment, total, views } = selectedBirdName;

  const [localTotal, setTotal] = React.useState(() => {
    console.log("inside arrow function");
    let totalPayment = 0;
    if (amount === "overnight") {
      totalPayment = 12;
    } else if (amount === "days3") {
      totalPayment = 5;
    } else if (amount === "days7") {
      totalPayment = 2;
    }

    dispatch(addTotal(totalPayment));
  });

  React.useEffect(() => {
    setTotal;
  }, [localTotal]);

  const dropdownOptions = [
    { key: "Select an option", value: "" },
    { key: "Bluejay", value: "bluejay" },
    { key: "Robin", value: "robin" },
    { key: "Sparrow", value: "sparrow" },
  ];

  const dropdownShippingAmtOptions = [
    { key: "Select an option", value: "" },
    { key: "Overnight", value: "overnight" },
    { key: "3 Day", value: "days3" },
    { key: "7 Day", value: "days7" },
  ];

  const dropdownPaymentOptions = [
    { key: "Select an option", value: "" },
    { key: "Cash", value: "cash" },
    { key: "CC", value: "cc" },
    { key: "ACH", value: "ach" },
  ];

  let localSelectOption = "";
  if (name2) {
    localSelectOption = name2;
  }

  let localSelectShippingAmtOption = "";
  if (amount) {
    localSelectShippingAmtOption = amount;
  }

  let localSelectPaymentOption = "";
  if (payment) {
    localSelectPaymentOption = payment;
  }

  const initialValues = {
    selectOption: localSelectOption,
    selectShippingAmtOption: localSelectShippingAmtOption,
    selectPaymentOption: localSelectPaymentOption,
  };
  const validationSchema = Yup.object({
    selectOption: Yup.string().required("Required"),
    selectShippingAmtOption: Yup.string().required("Required"),
  });
  const onSubmit = (values: {
    selectOption: any;
    selectShippingAmtOption: any;
    selectPaymentOption: any;
  }) => {
    dispatch(addBird(values.selectOption));
    dispatch(addShippingAmt(values.selectShippingAmtOption));
    dispatch(addPayment(values.selectPaymentOption));
  };

  return (
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
            label="Select a bird"
            name="selectOption"
            options={dropdownOptions}
          />
          <br />
          <FormikControl
            control="select"
            label="Select a shipping amount"
            name="selectShippingAmtOption"
            options={dropdownShippingAmtOptions}
          />
          <br />
          <FormikControl
            control="select"
            label="Select a payment"
            name="selectPaymentOption"
            options={dropdownPaymentOptions}
          />
          <button type="submit">Submit</button> - Total = {total}
        </Form>
      )}
    </Formik>
  );
}

export default FormikContainer;
