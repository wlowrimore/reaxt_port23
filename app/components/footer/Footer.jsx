import Image from "next/image";

import React from "../../../public/images/techLogos/svg/react.svg";
import Next from "../../../public/images/techLogos/svg/next.svg";
import Tailwind from "../../../public/images/techLogos/svg/tailwind.svg";
import JavaScript from "../../../public/images/techLogos/svg/javascript.svg";

const Footer = (tech) => {
  return (
    <footer className="min-h-[1rem] py-[0.2rem] fixed bottom-0 text-xs bg-neutral-900 w-screen flex justify-around">
      <div className="flex text-neutral-500 py-1">
        <p>&copy; 2023 All Rights Reserved. William Lowrimore & fakenamedev</p>
      </div>
      <div className="flex">
        <ul className="text-neutral-500 flex space-x-2">
          <li>
            <Image
              src={React}
              alt="react"
              width={500}
              height={500}
              className="w-6"
            />
          </li>
          <li>
            <Image
              src={Next}
              alt="next.js"
              width={500}
              height={500}
              className="w-5 pt-[0.15rem]"
            />
          </li>
          <li>
            <Image
              src={Tailwind}
              alt="tailwind"
              width={500}
              height={500}
              className="w-6"
            />
          </li>
          <li>
            <Image
              src={JavaScript}
              alt="javascript"
              width={500}
              height={500}
              className="w-6"
            />
          </li>
        </ul>
      </div>
    </footer>
  );
};
export default Footer;
