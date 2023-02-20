import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

function parseCC(cc: string) {
  // const cc =
  //   "029200C0170018000292;1111********4444=2501?*06872D32BF2E87D88EEE0BF6B739B637DD266A6ACE66F4F86989BFA16BCA06EB321E0EF8D23D20DC0597ED985B000720262CAF00001815E10";
  console.log("CC:" + cc);
  const firstSemiColon = cc.indexOf(";", 0);
  console.log("firstSemiColon:" + firstSemiColon);
  const firstEqualsign = cc.indexOf("=", 0);
  console.log("firstEqualsign:" + firstEqualsign);
  const firstQuestionMark = cc.indexOf("?", 0);
  console.log("firstQuestionMark:" + firstQuestionMark);

  const creditCarNumber = cc.substring(firstSemiColon + 1, firstEqualsign);
  console.log("creditCarNumber:" + creditCarNumber);

  const expirationDate = cc.substring(firstEqualsign + 1, firstQuestionMark);
  console.log("expirationDate:" + expirationDate);
}

function FormikContainer() {
  const initialValues = {
    selectOption: "",
  };
  const validationSchema = Yup.object({
    selectOption: Yup.string().required("Required"),
  });
  const onSubmit = (values: { selectOption: any }) => {};
  const [alert, setAlert] = useState(false);
  const [keypadEntry, setKeypadEntry] = useState("");
  const [readOnly, setReadOnly] = useState(false);

  // const handleFocus1 = React.useCallback(() => {
  //   console.log("FOCUSED callback 1");
  //   console.log("FOCUSED callback 2");
  // }, []);
  // const handleChange = React.useCallback(() => {
  //   setAlert(true);
  //   console.log("FOCUSED callback 1");
  // }, []);
  const handleFocus = () => {
    setAlert(true);
    console.log("FOCUS");
  };
  const handleBlur = () => {
    setAlert(false);
    console.log("BLUR");
  };
  const handleChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setKeypadEntry(event.target.value);
    setAlert(false);
    parseCC(event.target.value.toString());
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ values, errors, setFieldValue }) => (
        <Form>
          {/* <Field onFocus={handleFocus1} name="testUseCallback" />
          <br /> */}
          <div className="information-wrapper">
            <Field
              autoComplete="off"
              onFocus={handleFocus}
              onChange={(event) => {
                setKeypadEntry(event.target.value);
                setAlert(false);
                parseCC(event.target.value.toString());
                setReadOnly(true);
                // console.log(keypadEntry);
              }}
              onBlur={handleBlur}
              name="keypadEntry"
              // class={readOnly ? false : true}
            />
            <Field name="expDate" disabled />
            {alert && (
              <div className="popup">
                Use CC keypad to type both CC and Exp date, then hit keypad
                ENTER
              </div>
            )}
          </div>
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
}

export default FormikContainer;
