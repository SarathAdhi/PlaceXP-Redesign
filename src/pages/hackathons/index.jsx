import React, { useEffect, useState } from "react";
import { H1, H3, H4, H6, P } from "../../common/components/elements/Text";
import { PopDownCard } from "../../common/components/PopDownCard";
import PageLayout from "../../common/layout/PageLayout";
import { AxiosGet } from "../../lib/axios";

export default function View() {
  const [allHackathons, setAllHackathons] = useState([]);
  const [searchInputText, setSearchInputText] = useState("");

  useEffect(() => {
    async function getHackathonsData() {
      const { data } = await AxiosGet("/hackathon/hackathon");
      setAllHackathons(data);
    }
    getHackathonsData();
  }, []);

  const filteredHackathonsDetails = allHackathons.filter((hackathon) => {
    if (searchInputText === "") {
      return hackathon;
    } else {
      return (
        hackathon.hackathonTitle?.toLowerCase().includes(searchInputText) ||
        hackathon.hackathonOrganizer.value
          .toLowerCase()
          .includes(searchInputText)
      );
    }
  });

  return (
    <PageLayout title="View Hackathons" className="mt-20 gap-16">
      <div className="w-4/5 flex flex-col lg:flex-row lg:justify-between items-center">
        <div className="flex flex-col  items-center lg:items-start gap-2 mb-10 lg:mb-0">
          <H3 className="text-primary-300 text-center uppercase">
            anything about hackathons?
          </H3>
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
      {allHackathons.length === 0 ? (
        <H4 className="pt-20">Loading...</H4>
      ) : (
        <div className="flex flex-wrap gap-5 justify-center">
          {filteredHackathonsDetails.map((hackathon, index) => (
            <PopDownCard key={hackathon._id} title={hackathon.hackathonTitle}>
              {hackathon.hackathonOrganizer && (
                <div className="w-full text-center text-black pt-0.5 flex justify-around items-center gap-1">
                  <P className="font-semibold bg-primary-200 p-2 rounded-lg">
                    Organizer: {hackathon.hackathonOrganizer.value}
                  </P>
                  <P className="font-semibold bg-primary-200 p-2 rounded-lg">
                    Deadline: {hackathon.deadline}
                  </P>
                </div>
              )}
              {hackathon.hackathonBody && (
                <H6 className="text-center">{hackathon.hackathonBody}</H6>
              )}
              {hackathon.hackathonLink && (
                <a
                  className="px-2 py-0.5 rounded-lg bg-primary-500 text-white"
                  href={hackathon.hackathonLink}
                >
                  Link
                </a>
              )}
              {hackathon.tags.length !== 0 && (
                <div className="text-center text-black pt-0.5 flex justify-center items-center gap-1">
                  <P>Tags:</P>
                  {hackathon.tags.map((tag, index) => (
                    <P key={index}>{tag}</P>
                  ))}
                </div>
              )}
            </PopDownCard>
          ))}
        </div>
      )}
    </PageLayout>
  );
}