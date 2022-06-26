import React from "react";
import { AddForm } from "../../common/components/AddForm";
import PageLayout from "../../common/layout/PageLayout";
import { AxiosPost } from "../../lib/axios";
import { showErrorAlert } from "../../utils/Alert";
import { showErrorsToast, showSuccessToast } from "../../utils/Toast";

const initialValues = {
  EventTitle: "",
  EventDesc: "",
  EventOrganizer: "",
  tags: "",
  Deadline: "",
  RegisLink: "",
  EventDay: "",
  EventTime: "",
  createdOn: new Date(),
};

const inputFields = [
  {
    key: "EventTitle",
    label: "Title",
    type: "text",
    placeholder: "",
    required: true,
  },
  {
    key: "EventDesc",
    label: "Subject",
    type: "text",
    placeholder: "",
    required: true,
  },
  {
    key: "EventOrganizer",
    label: "Organizer",
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
    key: "Deadline",
    label: "Deadline",
    type: "date",
    placeholder: "",
    required: true,
  },
  {
    key: "RegisLink",
    label: "Link",
    type: "text",
    placeholder: "",
    required: true,
  },
  {
    key: "EventDay",
    label: "Event Day",
    type: "date",
    placeholder: "",
    required: true,
  },
  {
    key: "EventTime",
    label: "Event Time",
    type: "time",
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
      `/clubEvents/clubEvents/new?id=${session.id}&token=${session.token}`,
      values
    );

    if (data.code === 200) {
      showSuccessToast({ title: data.msg });
      router.replace("/club-events/add");
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
