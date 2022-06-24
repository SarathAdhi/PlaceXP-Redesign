import React from "react";
import { AddForm } from "../../common/components/AddForm";
import PageLayout from "../../common/layout/PageLayout";
import { AxiosPost } from "../../lib/axios";

const inputFields = [
  {
    key: "title",
    label: "Title",
    type: "text",
    placeholder: "",
    required: true,
  },
  {
    key: "subject",
    label: "Subject",
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
  const handleSubmit = (values) => {
    // AxiosPost("/hackathon/add", values);
    console.log(values);
  };

  return (
    <PageLayout title="Add Interview" className="mt-10">
      <AddForm
        title="Add Interviews"
        inputFields={inputFields}
        onSubmit={handleSubmit}
      />
    </PageLayout>
  );
}
