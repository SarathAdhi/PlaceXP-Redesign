import React from "react";
import { useFormik } from "formik";

export const Form = ({ initialValues, inputFields, onSubmit }) => {
  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: onSubmit,
  });
  return (
    <form
      className="flex flex-col items-center gap-5"
      onSubmit={formik.handleSubmit}
    >
      {inputFields.map(({ label, key, ...inputProps }) => (
        <div key={key} className="w-11/12 flex items-center justify-between">
          <label
            htmlFor={key}
            className="text-xl font-semibold text-primary-900"
          >
            {label}
          </label>
          <input
            id={key}
            name={key}
            {...inputProps}
            onChange={formik.handleChange}
            className="w-4/5 px-2 py-1 rounded-md text-black border-[1px] border-primary-900 focus:outline-none"
          />
        </div>
      ))}
      <button
        type="submit"
        className="mt-5 bg-primary-900 text-white px-5 py-2 rounded-lg"
      >
        Submit
      </button>
    </form>
  );
};
