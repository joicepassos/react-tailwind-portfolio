
import React from "react";
import GitHub from "../assets/github.png";
import TwitterIcon from "../assets/twitter.png";
import InstagramIcon from "../assets/instagram.png";
import LinkedInIcon from "../assets/linkedin.png";

const SocialMediaIcons = () => {
  
    const Icon = ({ src, href }) => (
    <a
        className="hover:opacity-75 transition duration-500"
        href={href}
        target="_blank"
        rel="noreferrer"
    >
    <img
      src={src}
      alt="social media icon"
      className="w-6 h-6 mx-2 cursor-pointer hover:opacity-75"
    />
    </a>
  );

  return (
    <div className="flex justify-center mt-8">
      <Icon src={GitHub} href={"https://github.com/joicepassos"} />
      <Icon src={InstagramIcon} href={"https://www.instagram.com/joice_passsos/"} />
      <Icon src={LinkedInIcon}  href={"https://www.linkedin.com/in/joiceferreirapassos/"}/>
    </div>
  );
};

export default SocialMediaIcons;
