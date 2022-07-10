import React from "react";
import { H4, P } from "../elements/Text";
import { LinkedItem } from "../../../common/components/elements/LinkedItem";
import { InstagramSVG, LinkedInSVG, YouTubeSVG } from "./socialMediaIcons";

const socialMediaLinks = [
  {
    key: "youtube",
    href: "https://www.youtube.com/channel/UC3APG4AIn5H7PK4opSid_Vw",
    Icon: YouTubeSVG,
  },
  {
    key: "instagram",
    href: "https://www.instagram.com/placexpvitc/",
    Icon: InstagramSVG,
  },
  {
    key: "linkedin",
    href: "https://www.linkedin.com/company/place-xp-vitc/mycompany/",
    Icon: LinkedInSVG,
  },
];

export default function Footer() {
  return (
    <footer className="py-3 sm:py-5 flex justify-center items-center border-t-2 bg-white">
      <div className="w-11/12 flex flex-col gap-5 justify-center items-center">
        <div className="w-full flex gap-5 justify-around items-center">
          <H4 className="text-primary-900 font-semibold">Connect With Us</H4>
          <div className="flex gap-5">
            {socialMediaLinks.map(({ key, href, Icon }) => (
              <a key={key} href={href} target="_blank">
                <Icon />
              </a>
            ))}
          </div>
        </div>
        <LinkedItem href="/policy" className="underline text-sky-600">
          Terms of use
        </LinkedItem>
        <P className="text-black">&#169; 2022 PlaceXP - All Rights Reserved</P>
      </div>
    </footer>
  );
}
