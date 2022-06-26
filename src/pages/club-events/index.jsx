import React, { useEffect, useState } from "react";
import { H4, H6, P } from "../../common/components/elements/Text";
import Modal from "../../common/components/Modal";
import { ViewCards } from "../../common/components/ViewCards";
import PageLayout from "../../common/layout/PageLayout";
import { AxiosGet } from "../../lib/axios";

const ModalDetails = ({
  EventOrganizer,
  Deadline,
  EventDesc,
  EventDay,
  EventTime,
  RegisLink,
  tags,
}) => (
  <div className="flex flex-col items-center gap-5">
      <div className="w-full text-center text-black pt-0.5 flex justify-around flex-wrap items-center">
        <div>
         { EventOrganizer && (
          <P className="font-semibold bg-primary-200 p-2 m-2 rounded-lg">
            Organizer: {EventOrganizer}
          </P>
         )}
         { EventDay && (
          <P className="font-semibold bg-primary-200 p-2 m-2 rounded-lg">
            Event Day: {EventDay.substring(0, 10)}
          </P>
         )}
        </div>
        <div>
         { Deadline && (
          <P className="font-semibold bg-primary-200 p-2 m-2 rounded-lg">
            Deadline: {Deadline.substring(0, 10)}
          </P>
         )}
         { EventTime && (
          <P className="font-semibold bg-primary-200 p-2 m-2 rounded-lg">
            Event Time: {EventTime}
          </P>
        </div>
      </div>
    )}
    {EventDesc && <H6 className="text-center">{EventDesc}</H6>}
    {RegisLink && (
      <a className="underline text-sky-700" href={RegisLink}>
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
  const [allClubEvents, setAllClubEvents] = useState([]);
  const [selectedClubEvent, setSelectedClubEvent] = useState("");
  const [searchInputText, setSearchInputText] = useState("");

  useEffect(() => {
    async function getClubEventsData() {
      const { data } = await AxiosGet("/clubevents/clubevents");
      setAllClubEvents(data);
    }
    getClubEventsData();
  }, []);

  const filteredClubEventsDetails = allClubEvents.filter((clubevent) => {
    if (searchInputText === "") {
      return clubevent;
    } else {
      return (
        clubevent.EventTitle?.toLowerCase().includes(searchInputText) ||
        clubevent.EventOrganizer
          .toLowerCase()
          .includes(searchInputText)
      );
    }
  });

  return (
    <PageLayout title="View Club Events" className="mt-10">
      <ViewCards
        title="anything about club events?"
        text="Get it here."
        data={allClubEvents}
        setSearchInputText={setSearchInputText}
      >
        {filteredClubEventsDetails.map((clubevent) => {
          return (
            <button
              key={clubevent._id}
              onClick={() => {
                setSelectedClubEvent(clubevent);
                setIsModalOpen(true);
              }}
              className="w-96 flex flex-col gap-2 bg-white p-2 text-black rounded-lg border-[2px] border-primary-200 duration-300 shadow-md hover:shadow-primary-600"
            >
              <div className="w-full flex-1 p-4 flex flex-col gap-5 justify-between bg-primary-100 rounded-lg text-center">
                <H4 className="font-semibold">{clubevent.EventTitle}</H4>
                {clubevent.EventDesc && (
                  <P>
                    <strong>Description:</strong>{" "}
                    {clubevent.EventDesc?.substring(0, 100)}...
                  </P>
                )}
              </div>
              {
                <P className="w-full text-center pt-0.5">
                  Tags:{" "}
                  {clubevent.tags.length !== 0
                    ? clubevent.tags.join(", ")
                    : "No Tags found"}
                </P>
              }
            </button>
          );
        })}
      </ViewCards>

      <Modal
        title={selectedClubEvent.EventTitle}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      >
        <ModalDetails {...selectedClubEvent} />
      </Modal>
    </PageLayout>
  );
}
