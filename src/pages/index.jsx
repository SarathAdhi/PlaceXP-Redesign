import Image from "next/image";
import PageLayout from "../common/layout/PageLayout";
import { H1, H2, H3 } from "../common/components/elements/Text";
import { Card } from "../modules/home/Card";
import { Button } from "../common/components/elements/Button";
import { LinkedItemStyled } from "../common/components/elements/LinkedItem";

const cardsDetails = [
  {
    title: "Interviews",
    img: "https://img.icons8.com/external-icongeek26-outline-icongeek26/64/undefined/external-interview-office-icongeek26-outline-icongeek26.png",
    text: "Nervous about interviews? Worry no more because we have here a conglomeration of interview experiences of our seniors at various prestigous institutions.",
    button: "Explore Interviews",
    href: "/interviews"
  },
  {
    title: "Hackathons",
    img: "https://img.icons8.com/wired/64/undefined/code.png",
    text: "Wanna feel the rush behind coding competitions? Register ASAP and start participating in all the hackathons conducted by well-known organisations. ",
    button: "Explore Hackathons",
    href: "/hackathons"
  },
  // {
  //   title: "Mock Interviews",
  //   img: "https://img.icons8.com/ios/50/undefined/document-1.png",
  //   text: "Worried about cracking the aptitude test in your interviews? Fret not because PlaceXP has come up with a detailed collection of tests conducted by various prestigious institutions.",
  //   button: "Explore Mock Interviews",
  // },
  {
    title: "Club Events",
    img: "https://img.icons8.com/external-sbts2018-mixed-sbts2018/58/000000/external-events-social-media-basic-1-sbts2018-mixed-sbts2018.png",
    text: "Missing out on a lot of events conducted at VITC? Don't worry, we have the collection of all the club events that will be taking place at our campus for you to participate.",
    button: "Explore Club Events",
    href: "/club-events"
  },
];

export default function Home() {
  return (
    <PageLayout title="Home" className="gap-5">
      <div className="flex justify-between flex-col lg:flex-row items-center gap-10 mt-10 lg:-mt-10">
        <div className="lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-start lg:pr-20">
          <H3 className="text-primary-600 font-medium leading-normal">
            THIS IS PLACEXP!
          </H3>
          <H1 className="text-primary-900 font-semibold leading-tight mb-5">
            We keep you updated with all the academic and placement stuff of VIT
            Chennai.
          </H1>
          <div className="flex justify-center flex-wrap gap-3">
            <LinkedItemStyled href="#resources">
              Start Exploring
            </LinkedItemStyled>
            <LinkedItemStyled href="#">About Us</LinkedItemStyled>
          </div>
        </div>
        <div className="w-full sm:w-96 lg:w-1/2">
          <Image
            className=""
            src="/assets/home/hero.png"
            alt="hero"
            width="100%"
            height="100%"
            layout="responsive"
            objectFit="contain"
          />
        </div>
      </div>

      <div id="resources" className="pt-5 sm:pt-20">
        <H2 className="text-primary-900 text-center font-semibold mb-6">
          Resources We Offer
        </H2>
        <div className="flex flex-wrap gap-5 justify-center">
          {cardsDetails.map((details, index) => (
            <Card key={index} {...details} />
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
