import React, { useEffect, useState } from "react";
import { H4, H6, P } from "../../common/components/elements/Text";
import Modal from "../../common/components/Modal";
import { ViewCards } from "../../common/components/ViewCards";
import PageLayout from "../../common/layout/PageLayout";
import { AxiosGet } from "../../lib/axios";

const ModalDetails = ({
  hackathonOrganizer,
  deadline,
  hackathonBody,
  hackathonLink,
  tags,
}) => (
  <div className="flex flex-col items-center gap-5">
    {hackathonOrganizer && (
      <div className="w-full text-center text-black pt-0.5 flex justify-around items-center gap-1">
        <P className="font-semibold bg-primary-200 p-2 rounded-lg">
          Organizer: {hackathonOrganizer.value}
        </P>
        <P className="font-semibold bg-primary-200 p-2 rounded-lg">
          Deadline: {deadline}
        </P>
      </div>
    )}
    {hackathonBody && <H6 className="text-center">{hackathonBody}</H6>}
    {hackathonLink && (
      <a className="underline text-sky-700" href={hackathonLink}>
        Link
      </a>
    )}
    {tags.length !== 0 && (
      <div className="text-center text-black pt-0.5 flex justify-center items-center gap-1">
        <P>Tags:</P>
        {tags.map((tag, index) => (
          <P key={index}>{tag}</P>
        ))}
      </div>
    )}
  </div>
);

export default function View() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [allHackathons, setAllHackathons] = useState([]);
  const [selectedHackathon, setSelectedHackathon] = useState("");
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
    <PageLayout title="View Hackathons" className="mt-10">
      <ViewCards
        title="anything about hackathons?"
        text="Get it here."
        data={allHackathons}
        setSearchInputText={setSearchInputText}
      >
        {filteredHackathonsDetails.map((hackathon) => {
          return (
            <button
              key={hackathon._id}
              onClick={() => {
                setSelectedHackathon(hackathon);
                setIsModalOpen(true);
              }}
              className="w-80 flex flex-col gap-2 bg-white p-2 text-black rounded-lg border-[2px] border-primary-200 duration-300 shadow-md hover:shadow-primary-600"
            >
              <div className="w-full flex-1 p-4 flex flex-col gap-5 justify-between bg-primary-100 rounded-lg text-center">
                <H4 className="font-semibold">{hackathon.hackathonTitle}</H4>
                {hackathon.hackathonBody && (
                  <P>
                    <strong>Description:</strong>{" "}
                    {hackathon.hackathonBody?.substring(0, 100)}...
                  </P>
                )}
                {hackathon.deadline && (
                  <P>
                    <strong>Deadline: </strong>
                    {hackathon.deadline}
                  </P>
                )}
              </div>
              {
                <P className="w-full text-center pt-0.5">
                  Tags:{" "}
                  {hackathon.tags.length !== 0
                    ? hackathon.tags.join(", ")
                    : "No Tags found"}
                </P>
              }
            </button>
          );
        })}
      </ViewCards>

      <Modal
        title={selectedHackathon.hackathonTitle}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      >
        <ModalDetails {...selectedHackathon} />
      </Modal>
    </PageLayout>
  );
}
