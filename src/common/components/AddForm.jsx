import React from "react";
import { H1 } from "./elements/Text";
import { Form } from "./Form";

const initialValues = {
  title: "",
  subject: "",
  tags: "",
  company: "",
  video: "",
};

export const AddForm = ({ title, onSubmit, inputFields = [] }) => {
  return (
    <div className="w-full mt-10 flex flex-col gap-20">
      <H1 className="font-extrabold text-center text-primary-900">{title}</H1>
      {inputFields.length !== 0 && (
        <Form
          initialValues={initialValues}
          inputFields={inputFields}
          onSubmit={onSubmit}
        />
      )}
    </div>
  );
};
