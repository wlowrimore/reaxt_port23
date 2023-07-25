import Link from "next/link";
import {
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaFacebookMessenger,
} from "react-icons/fa";
import { IoInvertMode } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";

const MainNav = () => {
  return (
    <>
      <header className="bg-gray-50 lg:flex justify-around relative py-2">
        <div className="text-center lg:text-start">
          <h1 className="text-2xl lg:text-4xl text-cyan-900 tracking-wide">
            William Lowrimore
          </h1>
          <p className="text-lg lg:text-2xl text-cyan-700 font-thin tracking-wide">
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
              <Link
                href="#"
                className="p-1 hover:underline hover:text-cyan-700"
              >
                about
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="p-1 hover:underline hover:text-cyan-700"
              >
                projects
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="p-1 hover:underline hover:text-cyan-700"
              >
                skills
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="p-1 hover:underline hover:text-cyan-700"
              >
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
        <nav className="hidden lg:flex items-end text-cyan-900">
          <ul className="flex space-x-6 text-lg px-3">
            <li>
              <Link
                href="#"
                className="px-1 hover:underline hover:text-cyan-700"
              >
                about
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="px-1 hover:underline hover:text-cyan-700"
              >
                projects
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="px-1 hover:underline hover:text-cyan-700"
              >
                skills
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="px-1 hover:underline hover:text-cyan-700"
              >
                contact
              </Link>
            </li>
          </ul>
        </nav>

        <nav className="hidden lg:flex items-end text-cyan-900">
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
        </nav>

        <div className="hidden lg:flex flex-col justify-end items-center mb-[-10px] text-cyan-900">
          <p className="text-lg">
            <IoInvertMode />
          </p>
          <p className="text-sm">dark-mode</p>
        </div>
      </header>
      {/* <hr /> */}
    </>
  );
};

export default MainNav;
