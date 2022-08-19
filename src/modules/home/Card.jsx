import React from "react";
import { H3, P } from "../../common/components/elements/Text";
import { LinkedItemStyled } from "../../common/components/elements/LinkedItem";

export const Card = ({ title, img, text, button, href }) => {
  return (
    <div className="group w-full sm:w-96 px-6 py-5 flex flex-col justify-between items-center rounded-lg shadow-md border-2 border-primary-200 hover:border-transparent duration-300 hover:rounded-xl hover:shadow-primary-600">
      <div className="flex flex-col justify-center items-center">
        <H3 className="relative text-primary-900 font-medium mb-5 text-center">
          <span className="relative z-10 font-semibold">{title}</span>
          <span className="absolute right-0 bottom-0 rounded-full w-0 h-[3px] bg-primary-600 z-0 group-hover:w-full duration-300 group-hover:transition-all"></span>
        </H3>
        <img className="w-16" src={img} />
        <P className="text-center my-6">{text}</P>
      </div>
      <LinkedItemStyled href={link}>{button}</LinkedItemStyled>
    </div>
  );
};
