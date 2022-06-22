import React from "react";
import PageLayout from "../common/layout/PageLayout";
import { H1, H3 } from "../common/components/elements/Text";
import { Input } from "../common/components/elements/Input";

export default function ContactUs() {
  return (
    <PageLayout title="Contact" className="h-[90vh] justify-center">
      <div className="w-4/5 flex flex-col lg:flex-row lg:justify-between items-center">
        <div className="flex flex-col  items-center lg:items-start gap-2 mb-10 lg:mb-0">
          <H3 className="text-primary-300 text-center">HAVE QUESTIONS?</H3>
          <H1 className="font-extrabold text-center text-primary-900">
            Ask Us.
          </H1>
          <H1 className="font-extrabold text-center text-primary-900">
            Right away.
          </H1>
        </div>
        <div className="w-1/2 h-96 shadow-xl flex flex-col gap-5 justify-center items-center bg-primary-200 rounded-xl">
          <Input
            label="Email:"
            className="w-full !py-3 sm:w-96 shadow-lg border-[2px] border-primary-600 bg-transparent focus:outline-none"
            placeholder="Enter your email here..."
            type="text"
          />
          <Input
            label="Query:"
            className="w-full !py-3 sm:w-96 shadow-lg border-[2px] border-primary-600 bg-transparent focus:outline-none"
            placeholder="Enter your query here..."
            type="text"
          />
        </div>
      </div>
    </PageLayout>
  );
}
