"use client";
import {
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaFacebookMessenger,
} from "react-icons/fa";
import DarkModeBtn from "../DarkModeBtn";
import { useState, lazy } from "react";
import Link from "next/link";
import Image from "next/image";

import { FiMenu } from "react-icons/fi";

const MainNav = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="dark:bg-black z-99 top-0 bg-cyan-800 height-[10em] w-full lg:border-b border-cyan-900 lg:flex justify-around">
      <div className="flex flex-col justify-end text-center lg:mb-6 lg:mt-6 lg:text-start">
        <Link href="/">
          <h1 className="text-2xl lg:text-4xl text-white  hover:text-gray-300 tracking-wide">
            William Lowrimore
          </h1>
        </Link>
        <p className="text-lg lg:text-2xl text-gray-300 font-thin tracking-wide">
          Software Engineer
        </p>
      </div>

      <div className="lg:hidden cursor-pointer fixed z-99 right-4 top-1 text-gray-300">
        <FiMenu className="text-2xl" onClick={() => setOpen(!open)} />
      </div>
      <nav
        onClick={() => setOpen(false)}
        className={`${
          open
            ? "flex flex-col justify-center items-center opacity-[80%] fixed inset-0 z-10 bg-black"
            : "hidden"
        } text-white text-lg lg:mb-4 items-end lg:flex`}
      >
        <span
          className="lg:hidden cursor-pointer fixed z-99 right-4 top-1 text-gray-300"
          onClick={() => setOpen(false)}
        >
          <FiMenu className="text-2xl" />
        </span>
        <ul className="lg:flex text-center text-white">
          <li
            className="my-8 lg:my-0 mx-2 tracking-wider hover:text-gray-300 border-t border-transparent hover:border-t hover:border-gray-300"
            onClick={() => setOpen(false)}
          >
            <Link href="/">about</Link>
          </li>
          <li
            className="my-8 lg:my-0 mx-2 tracking-wider hover:text-gray-300 border-t border-transparent hover:border-t hover:border-gray-300"
            onClick={() => setOpen(false)}
          >
            <Link href="/skills">technologies</Link>
          </li>
          <li
            className="my-8 lg:my-0 mx-2 tracking-wider hover:text-gray-300 border-t border-transparent hover:border-t hover:border-gray-300"
            onClick={() => setOpen(false)}
          >
            <Link href="/projects">projects</Link>
          </li>
          <li
            className="my-8 lg:my-0 mx-2 tracking-wider hover:text-gray-300 border-t border-transparent hover:border-t hover:border-gray-300"
            onClick={() => setOpen(false)}
          >
            <Link href="/development">development</Link>
          </li>
          <li
            className="my-8 lg:my-0 mx-2 tracking-wider hover:text-gray-300 border-t border-transparent hover:border-t hover:border-gray-300"
            onClick={() => setOpen(false)}
          >
            <Link href="/contact">contact</Link>
          </li>
          <li
            className="my-8 lg:my-0 mx-2 tracking-wider hover:text-gray-300 border-t border-transparent hover:border-t hover:border-gray-300"
            onClick={() => setOpen(false)}
          >
            <Link href="#">resume</Link>
          </li>
        </ul>

        <ul className="flex text-white space-x-4 pb-1 lg:ml-44">
          <li className="hover:text-gray-300 hover:cursor-pointer border-t border-transparent rounded-full hover:border-t hover:border-gray-300 pt-2 px-1 text-xl">
            <Link
              href="https://www.github.com/wlowrimore"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </Link>
          </li>
          <li className="hover:text-gray-300 hover:cursor-pointer border-t border-transparent rounded-full hover:border-t hover:border-gray-300 pt-2 px-1 text-xl">
            <Link
              href="https://www.linkedin.com/in/william-lowrimore-software-engineer"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </Link>
          </li>
          <li className="hover:text-gray-300 hover:cursor-pointer border-t border-transparent rounded-full hover:border-t hover:border-gray-300 pt-2 px-1 text-xl">
            <Link
              href="https://www.twitter.com/wlowrimore"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </Link>
          </li>
          <li className="hover:text-gray-300 hover:cursor-pointer border-t border-transparent rounded-full hover:border-t hover:border-gray-300 pt-2 px-1 text-xl">
            <Link
              href="https://m.me/wlowrimore"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookMessenger />
            </Link>
          </li>
        </ul>
        <span className="fixed right-5 top-10 lg:right-12 lg:top-6">
          <DarkModeBtn />
        </span>
      </nav>
    </header>
  );
};

// <>
{
  /* <header className="dark:bg-black sticky z-99 top-0 bg-cyan-800 height-[10em] w-full lg:border-b border-cyan-900 lg:flex justify-around">
        <div className="flex flex-col justify-end text-center lg:mb-6 lg:mt-6 lg:text-start">
          <Link href="/">
            <h1 className="text-2xl lg:text-4xl text-white  hover:text-gray-300 tracking-wide">
              William Lowrimore
            </h1>
          </Link>
          <p className="text-lg lg:text-2xl text-gray-300 font-thin tracking-wide">
            Software Engineer
          </p>
        </div> */
}

{
  /*---------- Mobile Navigation ------------*/
}

{
  /* <div className="lg:hidden cursor-pointer fixed z-99 right-4 top-1 text-gray-300">
          <FiMenu className="text-2xl" onClick={() => setOpen(!open)} />
        </div> */
}

{
  /* <nav
          onClick={() => setOpen(false)}
          className={`${
            open ? (
              <div className="text-gray-300  flex flex-col"></div>
            ) : (
              "hidden"
            )
          } text-white lg:mb-7 lg:flex items-end`}
        >
          <ul className="flex space-x-6 text-lg">
            <li className="hover:text-gray-300 hover:cursor-pointer">
              <Link href="/">about</Link>
            </li>
            <li className="hover:text-gray-300 hover:cursor-pointer">
              <Link href="/skills">languages & technologies</Link>
            </li>
            <li className="hover:text-gray-300 hover:cursor-pointer">
              <Link href="/projects">projects</Link>
            </li>
            <li className="hover:text-gray-300 hover:cursor-pointer">
              <Link href="/development">development</Link>
            </li>
            <li className="hover:text-gray-300 hover:cursor-pointer">
              <Link href="/contact">contact</Link>
            </li>
          </ul>
        </nav>

        <nav className="hidden text-white lg:mb-7 lg:flex items-end">
          <ul className="flex space-x-6 text-lg">
            <li className="hover:text-gray-300 hover:cursor-pointer">
              <Link
                href="https://www.github.com/wlowrimore"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </Link>
            </li>
            <li className="hover:text-gray-300 hover:cursor-pointer">
              <Link
                href="https://www.linkedin.com/in/william-lowrimore-software-engineer"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </Link>
            </li>
            <li className="hover:text-gray-300 hover:cursor-pointer">
              <Link
                href="https://www.twitter.com/wlowrimore"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </Link>
            </li>
            <li className="hover:text-gray-300 hover:cursor-pointer">
              <Link
                href="https://m.me/wlowrimore"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookMessenger />
              </Link>
            </li>
          </ul>
        </nav> */
}
{
  /* <div className="hidden lg:mb-7 lg:flex flex-col justify-end items-center"> */
}
{
}
{
  /* </div> */
}
{
  /* </header> */
}
{
  /* </> */
}
// );
// };

export default MainNav;
