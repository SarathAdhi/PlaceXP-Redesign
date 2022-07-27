import React, { useState } from "react";
import { useFormik } from "formik";
import { LoadingAnimation } from "../LoadingAnimation";
import DropDown from "./elements/Dropdown";
export const Form = ({ initialValues, inputFields, onSubmit }) => {
  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: onSubmit,
  });
  return (
    <>
    <DropDown name="Interviews" href="/interviews"/>
    </>
   
  );
};
