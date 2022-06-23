import React from "react";
import { H5, P } from "../elements/Text";
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
    <footer className="pt-10 py-2 md:py-5 flex justify-center items-center bg-white">
      <div className="w-11/12 flex justify-between items-center">
        <H5 className="text-primary-900 mr-5 text-sm sm:text-lg font-semibold">
          Connect With Us
        </H5>
        <div className="flex gap-2 sm:gap-5">
          {socialMediaLinks.map(({ key, href, Icon }) => (
            <a key={key} href={href} target="_blank">
              <Icon />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
