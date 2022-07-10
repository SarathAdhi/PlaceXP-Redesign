import React, { useEffect, useState } from "react";
import { LinkedItem } from "../../common/components/elements/LinkedItem";
import { H4, P } from "../../common/components/elements/Text";
import { ViewCards } from "../../common/components/ViewCards";
import PageLayout from "../../common/layout/PageLayout";
import { AxiosGet } from "../../lib/axios";

export default function Interviews() {
  const [allInterviews, setAllInterviews] = useState([]);
  const [searchInputText, setSearchInputText] = useState("");

  useEffect(() => {
    async function getInterviewsData() {
      const { data } = await AxiosGet("/post/getall");
      setAllInterviews(data);
    }
    getInterviewsData();
  }, []);

  const filteredInterviewsDetails = allInterviews.filter((interview) => {
    if (searchInputText === "") {
      return interview;
    } else {
      return (
        interview.postTitle.toLowerCase().includes(searchInputText) ||
        interview.company.toLowerCase().includes(searchInputText)
      );
    }
  });

  return (
    <PageLayout title="Interviews" className="mt-10">
      <ViewCards
        title="ALL ABOUT INTERVIEWS"
        text="Get it here."
        data={allInterviews}
        setSearchInputText={setSearchInputText}
      >
        {filteredInterviewsDetails.map((interview) => {
          return (
            <LinkedItem
              key={interview._id}
              href={`/interviews/${interview._id}`}
              className="w-80 flex flex-col gap-2 bg-white p-2 text-black rounded-lg border-[2px] border-primary-200 duration-300 shadow-md hover:shadow-primary-600"
            >
              <div className="h-3/4 py-3 px-4 flex flex-col gap-y-5 justify-around bg-primary-100 rounded-lg text-center">
                <H4 className="font-semibold">{interview.postTitle}</H4>
                <P>Description: Lorem ipsum dolor sit amet</P>
              </div>
              <P className="text-center pt-0.5">Tags: {interview.company}</P>
            </LinkedItem>
          );
        })}
      </ViewCards>
    </PageLayout>
  );
}
