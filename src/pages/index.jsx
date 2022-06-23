import Image from "next/image";
import PageLayout from "../common/layout/PageLayout";
import { H1, H2, H3 } from "../common/components/elements/Text";
import { Card } from "../modules/home/Card";
import { Button } from "../common/components/elements/Button";

const cardsDetails = [
  {
    title: "Interviews",
    img: "https://img.icons8.com/external-icongeek26-outline-icongeek26/64/undefined/external-interview-office-icongeek26-outline-icongeek26.png",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    button: "Explore Interviews",
  },
  {
    title: "Hackathons",
    img: "https://img.icons8.com/wired/64/undefined/code.png",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    button: "Explore Hackathons",
  },
  {
    title: "Mock Interviews",
    img: "https://img.icons8.com/ios/50/undefined/document-1.png",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    button: "Explore Mock Interviews",
  },
];

export default function Home() {
  return (
    <PageLayout className="gap-5">
      <div className="flex justify-between flex-col lg:flex-row items-center gap-10 mt-10 lg:mt-0">
        <div className="lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-start lg:pr-20">
          <H3 className="text-primary-600 font-medium leading-normal">
            THIS IS PLACEXP!
          </H3>
          <H1 className="text-primary-900 font-semibold leading-tight mb-5">
            We keep you updated with all the academic and placement stuff of VIT
            Chennai.
          </H1>
          <Button>Start Exploring</Button>
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

      <div className="">
        <H2 className="text-primary-900 text-center font-semibold mb-6">
          Resources We Offer
        </H2>
        <div className="flex flex-wrap gap-5 justify-center items-center">
          {cardsDetails.map((details, index) => (
            <Card key={index} {...details} />
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
