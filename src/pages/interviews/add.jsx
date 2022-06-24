import React from "react";
import { AddForm } from "../../common/components/AddForm";
import PageLayout from "../../common/layout/PageLayout";
import { AxiosPost } from "../../lib/axios";
import { showErrorAlert } from "../../utils/Alert";
import { showErrorsToast, showSuccessToast } from "../../utils/Toast";

const initialValues = {
  title: "",
  subject: "",
  tag: "",
  company: "",
  link: "",
};

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
    key: "tag",
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
    key: "link",
    label: "Video",
    type: "text",
    placeholder: "",
    required: true,
  },
];

export default function Add({ router, session }) {
  if (!session) {
    showErrorsToast({ title: "Please login to continue" });
    router.replace("/auth/login");
  }

  const handleSubmit = async (values) => {
    const { data } = await AxiosPost(
      `post/write/post/new?id=${session.id}&token=${session.token}`,
      values
    );
    if (data.code === 201) {
      showSuccessToast({ title: data.msg });
      router.replace("/interviews/add");
    } else {
      showErrorAlert({ title: data.msg });
    }
  };

  return (
    <PageLayout title="Add Interview" className="lg:mt-10">
      <AddForm
        title="Add Interviews"
        inputFields={inputFields}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      />
    </PageLayout>
  );
}
