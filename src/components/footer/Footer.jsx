import React from "react";
import {
  AiOutlineLinkedin,
  AiFillGithub,
  AiOutlineTwitter,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="py-5 mt-3  bg-amber-50 flex flex-wrap justify-center items-center gap-2 md:gap-10  absolute right-0 left-0 ">
      <p>Eyesome made by WeebWeb  </p>
      <p className="flex gap-3">
        <a href="https://github.com/">
          <AiFillGithub className="text-2xl text-gray-800" />
        </a>
        <a href="https://www.linkedin.com/">
          {" "}
          <AiOutlineLinkedin className="text-2xl text-gray-800" />
        </a>
        <a href="https://twitter.com/">
          <AiOutlineTwitter className="text-2xl text-gray-800" />
        </a>
      </p>
    </div>
  );
};

export default Footer;
