import React, { useEffect, useState } from "react";
import { LinkedItem } from "../../common/components/elements/LinkedItem";
import { H1, H3, H4, P } from "../../common/components/elements/Text";
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
    <PageLayout className=" gap-10 pt-10">
      <div className="w-4/5 flex flex-col lg:flex-row lg:justify-between items-center">
        <div className="flex flex-col  items-center lg:items-start gap-2 mb-10 lg:mb-0">
          <H3 className="text-primary-300 text-center">ALL ABOUT INTERVIEWS</H3>
          <H1 className="font-extrabold text-center text-primary-900">
            Get it here.
          </H1>
        </div>
        <input
          className="shadow-xl px-2 py-1 w-full sm:w-96 rounded-md border-[2px] border-gray-300 focus:outline-none"
          placeholder="Search here..."
          type="text"
          onChange={({ target }) => setSearchInputText(target.value)}
        />
      </div>
      {allInterviews.length === 0 ? (
        <H4 className="pt-20">Loading...</H4>
      ) : (
        <div className="w-full flex flex-wrap justify-center gap-5">
          {filteredInterviewsDetails.map((interview, index) => {
            return (
              <LinkedItem
                key={interview._id}
                href={`/interview/${interview._id}`}
                className="w-96 flex flex-col gap-2 bg-white p-2 text-black rounded-lg"
              >
                <div className="h-3/4 py-3 px-4 flex flex-col gap-y-5 justify-around bg-primary-100 rounded-lg text-center">
                  <H4 className="font-semibold">{interview.postTitle}</H4>
                  <P>Description: Lorem ipsum dolor sit amet</P>
                </div>
                <P className="text-center pt-0.5">Tags: {interview.company}</P>
              </LinkedItem>
            );
          })}
        </div>
      )}
    </PageLayout>
  );
}
