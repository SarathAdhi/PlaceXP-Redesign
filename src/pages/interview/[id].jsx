import React from "react";
import PageLayout from "../../common/layout/PageLayout";
import { AxiosGet } from "../../lib/axios";
import { H2 } from "../../common/components/elements/Text";

export default function View({ interviewDetails }) {
  console.log(interviewDetails);

  return (
    <PageLayout className="flex gap-5 flex-col items-center pt-10">
      <H2 className="font-bold">{interviewDetails.postTitle}</H2>
      {interviewDetails.videoLink && (
        <iframe
          className="w-full sm:w-[445px] h-[200px] sm:h-[250px] rounded-lg"
          src={interviewDetails.videoLink}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}

      <div
        className="text-lg text-center mt-10"
        dangerouslySetInnerHTML={{ __html: interviewDetails.postBody }}
      />
    </PageLayout>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.query;
  const { data } = await AxiosGet(`/post/get?i=${id}`);

  return {
    props: {
      interviewDetails: data[0],
    },
  };
}
