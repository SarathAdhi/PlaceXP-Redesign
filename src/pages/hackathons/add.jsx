import React from "react";
import { AddForm } from "../../common/components/AddForm";
import PageLayout from "../../common/layout/PageLayout";

const inputFields = [
  {
    key: "title",
    label: "Title",
    type: "text",
    placeholder: "",
    required: true,
  },
  {
    key: "body",
    label: "Body",
    type: "text",
    placeholder: "",
    required: true,
  },
  {
    key: "tags",
    label: "Tags",
    type: "text",
    placeholder: "",
    required: true,
  },
  {
    key: "company",
    label: "Company",
    type: "text",
    placeholder: "",
    required: true,
  },
  {
    key: "video",
    label: "Video",
    type: "text",
    placeholder: "",
    required: true,
  },
];

export default function Add() {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
  };

  return (
    <PageLayout title="Add Interview" className="mt-10">
      <AddForm
        title="Add Interviews"
        inputFields={inputFields}
        handleSubmit={handleSubmit}
      />
    </PageLayout>
  );
}
