import React from "react";
import { AddForm } from "../../common/components/AddForm";
import PageLayout from "../../common/layout/PageLayout";
import { AxiosPost } from "../../lib/axios";
import { showErrorAlert } from "../../utils/Alert";
import { showSuccessToast, showWarningToast } from "../../utils/Toast";

const initialValues = {
  email: "",
  password: "",
};

const inputFields = [
  {
    key: "email",
    label: "Email",
    type: "email",
    placeholder: "Enter your email",
    required: true,
  },
  {
    key: "password",
    label: "Password",
    type: "password",
    placeholder: "Enter your password",
    required: true,
  },
];

export default function Login({ router, session }) {
  if (session) {
    showWarningToast({ title: "Already LoggedIn" })
    router.replace("/");
  }

  const handleSubmit = async (values) => {
    const { data } = await AxiosPost("/login", values);
    if (data.code === 400) {
      showErrorAlert({ title: data.msg });
    } else {
      const user = {
        id: data.data._id,
        personalDetails: data.data.personalDetails,
        token: data.token,
      };
      const userData = JSON.stringify(user);
      sessionStorage.setItem("login-session", userData);
      showSuccessToast({ title: data.msg });
      router.replace("/");
    }
  };

  return (
    <PageLayout title="Login" className="mt-10">
      <AddForm
        title="Login"
        inputFields={inputFields}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      />
    </PageLayout>
  );
}
