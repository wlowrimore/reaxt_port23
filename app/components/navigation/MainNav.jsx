import Link from "next/link";
import {
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaFacebookMessenger,
} from "react-icons/fa";
import { IoInvertMode } from "react-icons/io5";
import DarkModeBtn from "../DarkModeBtn";
import { FiMenu } from "react-icons/fi";

const MainNav = () => {
  return (
    <>
      <header className="dark:bg-black sticky top-0 bg-cyan-800 height-[10em] w-full lg:border-b border-cyan-900 lg:flex justify-around">
        <div className="flex flex-col justify-end text-center lg:mb-6 lg:mt-6 lg:text-start">
          <Link href="/">
            <h1 className="text-2xl lg:text-4xl text-white dark:text-white  hover:text-gray-300 tracking-wide">
              William Lowrimore
            </h1>
          </Link>
          <p className="text-lg lg:text-2xl text-gray-300 font-thin tracking-wide">
            Software Engineer
          </p>
        </div>

        {/*---------- Mobile Navigation ------------*/}

        <div className="lg:hidden absolute right-4 top-5">
          <FiMenu className="text-2xl" />
        </div>

        <nav className="lg:hidden">
          <ul className="flex flex-col py-8 px-12 items-center absolute right-[12%] top-28 space-y-6 z-10 text-lg bg-cyan-900 bg-opacity-80 border border-cyan-900 rounded-md shadow-md shadow-black">
            <li>
              <Link href="/" className="p-1 hover:text-cyan-700">
                about
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                scroll={false}
                className="p-1 hover:text-cyan-700"
              >
                projects
              </Link>
            </li>
            <li>
              <Link href="/skills" className="p-1 hover:text-cyan-700">
                skills
              </Link>
            </li>
            <li>
              <Link href="/contact" className="p-1 hover:text-cyan-700">
                contact
              </Link>
            </li>

            <ul className="flex space-x-6 text-lg">
              <li>
                <FaGithub />
              </li>
              <li>
                <FaLinkedinIn />
              </li>
              <li>
                <FaTwitter />
              </li>
              <li>
                <FaFacebookMessenger />
              </li>
            </ul>
            <p className="text-lg">
              <IoInvertMode />
            </p>
          </ul>
        </nav>
        {/* ----------------- End Mobile Navigation ---------------- */}
        <nav className="hidden text-white lg:flex  lg:mb-6 items-end">
          <ul className="flex space-x-6 text-lg px-3">
            <li>
              <Link href="/" className="px-1 hover:text-gray-300">
                about
              </Link>
            </li>
            <li>
              <Link href="/skills" className="px-1 hover:text-gray-300">
                laguages & technologies
              </Link>
            </li>
            <li>
              <Link href="/projects" className="px-1 hover:text-gray-300">
                projects
              </Link>
            </li>
            <li>
              <Link href="/development" className="px-1 hover:text-gray-300">
                development
              </Link>
            </li>
            <li>
              <Link href="/contact" className="px-1 hover:text-gray-300">
                contact
              </Link>
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
        </nav>
        <div className="hidden lg:mb-7 lg:flex flex-col justify-end items-center">
          <DarkModeBtn />
        </div>
      </header>
    </>
  );
};

export default MainNav;
