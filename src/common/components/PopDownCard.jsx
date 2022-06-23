import { Disclosure, Transition } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/outline";
import React from "react";
import { H6 } from "./elements/Text";

export const PopDownCard = ({ title, children }) => {
  return (
    <div className="w-full sm:w-[450px]">
      <div className="mx-auto w-full max-w-md rounded-lg bg-white  shadow-lg p-2">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none">
                <H6 className="font-semibold">{title}</H6>
                <ChevronUpIcon
                  className={`${
                    open ? "duration-100 transform" : "duration-100 rotate-180"
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Transition
                show={open}
                enter="transition duration-200 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-200 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="px-4 pt-4 pb-2 flex flex-col justify-center items-center gap-4">
                  {children}
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
};
