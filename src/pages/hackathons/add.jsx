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
    key: "hackathonTitle",
    label: "Title",
    type: "text",
    placeholder: "",
    required: true,
  },
  {
    key: "hackathonBody",
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
    key: "hackathonOrganizer",
    label: "Organizer",
    type: "text",
    placeholder: "",
    required: true,
  },
  {
    key: "hackathonLink",
    label: "Link",
    type: "text",
    placeholder: "",
    required: true,
  },
  {
    key: "deadline",
    label: "Deadline",
    type: "date",
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
      `/hackathon/hackathon/new?id=${session.id}&token=${session.token}`,
      values
    );
    if (data.code === 200) {
      showSuccessToast({ title: data.msg });
      router.replace("/hackathons");
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
