import { Fragment, useState } from "react";
import { Popover, Transition, Menu } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import clsx from "clsx";
import { LinkedItem } from "../elements/LinkedItem";
import { pages } from ".";
import Image from "next/image";

export default function Navbar() {
  const [selectedTabKey, setSelectedTabKey] = useState("home");
  return (
<Popover className="w-full sticky top-0 z-50 bg-white border-b-2 border-gray-100">
  <div className="w-11/12 mx-auto">
    <div className="flex justify-between items-center py-2 md:space-x-10">
      <div className="flex justify-start lg:w-0 lg:flex-1">
        <LinkedItem href="/" onClick={() => setSelectedTabKey("home")}>
          <Image
            width={40}
            height={50}
            src="/assets/logo.png"
            alt="PlaceXP"
          />
        </LinkedItem>
      </div>
      <div className="md:hidden">
        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
          <MenuIcon className="h-6 w-6" aria-hidden="true" />
        </Popover.Button>
      </div>
      <div className="gap-2 hidden md:flex">
    
        {pages.map(({ key, name, href }) => (
              (key === 'interviews')? <>
              <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className={clsx(
                  "px-2 py-1 font-medium rounded-full transition-all",
                  selectedTabKey === key
                    ? "bg-primary-600 text-white"
                    : "text-primary-900"
                )}>
                Interviews
                </Menu.Button>
              </div>
              <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
          <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              <Menu.Item>
                {({ active }) => (
                    <LinkedItem
                    href={href}
                    className={clsx(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    {name}
                  </LinkedItem>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
              </Transition>
                </Menu>
              </>
              :
          <LinkedItem
            key={key}
            href={href}
            onClick={() => setSelectedTabKey(key)}
            className={clsx(
              "px-2 py-1 font-medium rounded-full transition-all",
              selectedTabKey === key
                ? "bg-primary-600 text-white"
                : "text-primary-900"
            )}
          >
            {name}
          </LinkedItem>
        ))}
      </div>
    </div>
  </div>

      {/* <--- Mobile device starts ---> */}

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          <div className="rounded-lg shadow-lg bg-white divide-y-2 divide-gray-50">
            <div className="pt-2 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <Image width={40} height={50} src="/logo.png" alt="" />
                </div>
                <div className="-mr-2">
                  <Popover.Button
                    id="navbar-close-btn"
                    className="inline-flex items-center justify-center text-gray-400"
                  >
                    <XIcon className="w-8" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-5">
                  {pages.map(({ key, name, href }) => (
                    <LinkedItem
                      key={key}
                      href={href}
                      onClick={() => {
                        setSelectedTabKey(key);
                        document.getElementById("navbar-close-btn").click();
                      }}
                      className={clsx(
                        "px-2 py-1 text-center text-lg font-medium rounded-full transition-all",
                        selectedTabKey === key
                          ? "bg-primary-600 text-white"
                          : "text-primary-900"
                      )}
                    >
                      {name}
                    </LinkedItem>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>

      {/* <--- Mobile device ends ---> */}
    </Popover>
  );
}
