import Image from "next/image";
import Link from "next/link";
import { Cabin } from "next/font/google";
import {
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaFacebookMessenger,
} from "react-icons/fa";
import { IoInvertMode } from "react-icons/io5";

const cabin = Cabin({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  return (
    <>
      <main className={`${cabin.className} h-screen`}>
        <header className="flex justify-around py-4">
          <div className="">
            <h1 className="text-4xl text-cyan-900 tracking-wide">
              William Lowrimore
            </h1>
            <p className="text-2xl text-cyan-700 font-light tracking-wide">
              Software Engineer
            </p>
          </div>

          {/* Mobile Navigation */}
          <div className="lg:hidden">
            <nav></nav>
          </div>

          <nav className="flex items-end text-cyan-900">
            <ul className="flex space-x-6 text-lg px-3">
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
            </ul>
          </nav>

          <nav className="flex items-end text-cyan-900">
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

          <div className="flex flex-col justify-end items-center mb-[-4px] text-cyan-900">
            <p className="text-lg">
              <IoInvertMode />
            </p>
            <p className="text-sm">dark-mode</p>
          </div>
        </header>
      </main>

      <footer className="flex justify-between">
        <h3>Created by William Lowrimore</h3>
        <p>Copyright &copy; 2023 William Lowrimore. All rights reserved.</p>
      </footer>
    </>
  );
}
