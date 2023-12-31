"use client";

import "./header.css";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

// mobile nav svgs

import Home from "../../../public/images/svg/home.svg";
import About from "../../../public/images/svg/about.svg";
import Projects from "../../../public/images/svg/projects.svg";
import Contact from "../../../public/images/svg/contact.svg";
import Resume from "../../../public/images/svg/pdf.svg";

const Header = () => {
  const [color, setColor] = useState(false);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const changeHeaderColor = () => {
      if (window.scrollY >= 80) {
        setColor(true);
      } else {
        setColor(false);
      }
    };
    window.addEventListener("scroll", changeHeaderColor);
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    setToggle(!toggle);

    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");

    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header>
      <div
        className={
          color
            ? "hidden md:flex headerNav headerNav-bg py-[1rem]"
            : "hidden md:flex headerNav py-[1rem]"
        }
      >
        <div className="hidden md:flex w-full justify-between items-center py-2">
          <ul className="flex">
            <h1 className="w-full text-white text-bold">william_lowrimore</h1>
            <li className="px-4 uppercase text-center">
              <Link onClick={handleClick} className="btmbrdr" href={"#home"}>
                home
              </Link>
            </li>
            <li className="px-4 uppercase text-center">
              <Link onClick={handleClick} className="btmbrdr" href={"#about"}>
                about
              </Link>
            </li>
            <li className="px-4 uppercase text-center">
              <Link
                onClick={handleClick}
                className="btmbrdr"
                href={"#projects"}
              >
                projects
              </Link>
            </li>
            <li className="px-4 uppercase text-center">
              <Link
                onClick={handleClick}
                className="btmbrdr"
                href={"#contact"}
              >
                contact
              </Link>
            </li>
            <li className="px-4 uppercase text-center">
              <Link
                href="/resume/williamLowrimoreResume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="williamLowrimoreResume.pdf"
                onClick={() => setToggle(!toggle)}
                className="btmbrdr"
              >
                resume
              </Link>
            </li>
          </ul>
        </div>


      </div>

      {/* mobile nav */}
      <div className="md:hidden fixed z-10 w-screen bottom-0 bg-black">
        <nav className="flex justify-center items-center"></nav>
        <ul className="flex justify-center items-center py-2">
          <li className="px-4 text-center text-white">
            <Link onClick={handleClick} href={"#home"}>
              <Image
                src={Home}
                alt="home page link"
                width={500}
                height={500}
                className="w-10"
              />
            </Link>
          </li>
          <li className="px-4 text-center text-white">
            <Link onClick={handleClick} href={"#about"}>
              <Image
                src={About}
                alt="about page link"
                width={500}
                height={500}
                className="w-8"
              />
            </Link>
          </li>
          <li className="px-4 text-center text-white">
            <Link onClick={handleClick} href={"#projects"}>
              <Image
                src={Projects}
                alt="projects page link"
                width={500}
                height={500}
                className="w-6"
              />
            </Link>
          </li>
          <li className="px-4 text-center text-white">
            <Link onClick={handleClick} href={"#contact"}>
              <Image
                src={Contact}
                alt="contact page link"
                width={500}
                height={500}
                className="w-8"
              />
            </Link>
          </li>
          <li className="px-4 text-center text-white">
            <Link
              href="/resume/swfr_resume_8-23.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="swfr_resume_8-23.pdf"
            >
              <Image
                src={Resume}
                alt="resume download link"
                width={500}
                height={500}
                className="w-8"
              />
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
