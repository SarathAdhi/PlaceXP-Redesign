import React from "react";
import PageLayout from "../../common/layout/PageLayout";
import { Url } from "../../constants/Url";
import Axios, { AxiosGet } from "../../lib/axios";

export default function index({ allInterviews }) {
  console.log(allInterviews);

  return (
    <PageLayout>
      {allInterviews.map((interview, index) => {
        return (
          <div key={interview._id} className="bg-indigo-500 m-2 p-2 text-white">
            <p>{interview.postTitle}</p>
            <p>{interview.company}</p>
          </div>
        );
      })}
    </PageLayout>
  );
}

export async function getServerSideProps() {
  const data = await AxiosGet("/post/getall");

  return {
    props: {
      allInterviews: data.data,
    },
  };
}
