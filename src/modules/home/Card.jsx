import React from "react";
import { H3, P } from "../../common/components/elements/Text";
import { Button } from "../../common/components/elements/Button";

export const Card = ({ title, img, text, button }) => {
  return (
    <div className="w-full sm:w-96 flex flex-col items-center rounded-lg shadow-md border-2 border-primary-200 hover:border-none duration-300 hover:rounded-xl hover:shadow-primary-600 px-6 py-3">
      <H3 className="text-primary-900 font-medium my-2 text-center">{title}</H3>
      <img className="w-16" src={img} />
      <P className="text-center my-6">{text}</P>
      <Button>{button}</Button>
    </div>
  );
};
