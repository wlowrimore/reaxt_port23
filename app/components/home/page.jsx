"use client";

import { Fade } from "react-awesome-reveal";
import Image from "next/image";
import Link from "next/link";
import DescAnimate from "../DescAnimate";

import ReactIcon from 'public/images/techLogos/svg/react.svg'
import NextIcon from 'public/images/techLogos/svg/next.svg'
import TailwindIcon from 'public/images/techLogos/svg/tailwind.svg'
import JSIcon from 'public/images/techLogos/svg/javascript.svg'

import "./home.css";

const Home = () => {
  const handleClick = (e) => {
    e.preventDefault();

    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");

    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-custombg1 bg-no-repeat bg-fixed bg-cover bg-center flex flex-col justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-40 mx-auto">
        {/* left/top section of grid */}
        <section className="flex flex-col justify-center items-center md:items-start lg:items-start mx-auto">
          <div>
            <p className="text-2xl text-start w-full md:text-start md:text-3xl xl:text-5xl text-orange-400">
              Hello, I&apos;m
            </p>
            <h1 className="text-2xl md:text-4xl md:pr-2 xl:text-5xl text-gray-200">
              William&nbsp;<span className="text-orange-400">Lowrimore</span>
            </h1>
          </div>

          <div className='w-full mx-auto'>
            <h1 className="uppercase gap-2 flex md:flex-row w-full text-xl text-start md:text-2xl xl:text-3xl text-orange-400">
              Front end
              <span className="text-gray-200">Developer</span>
            </h1>
          </div>

          {/* typing component */}
          <DescAnimate />

          {/* buttons group */}
          <div className="flex h-full items-center md:justify-start">
            <Link
              onClick={handleClick}
              href={"#contact"}
              className="hidden transform md:block md:bg-orange-400 rounded-sm text-xl text-gray-950 font-semibold transition hover:bg-transparent hover:text-orange-400 px-1 duration-500 uppercase"
            >
              reach out
            </Link>
            &nbsp;
            <button type="button">
              <Link
                href="/resume/williamLowrimoreResume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="williamLowrimoreResume.pdf"
                className="hidden transform md:block uppercase md:px-2 text-lg text-gray-200 tracking-wider transition hover:text-orange-400 duration-300"
              >
                get resume
              </Link>
            </button>
          </div>
        </section>

        {/* right/bottom section of grid */}
        <section className="flex justify-center items-center px-4">
          <Image
            src="/images/profile_img.jpg"
            width={500}
            height={500}
            alt="image representing the author"
            className="self rounded-md md:rounded-full border md:border-4 border-orange-200"
          />
        </section>
      </div>

      {/* list of traits */}
      <div className="fixed bottom-10 left-5 hidden md:flex justify-center items-center bg-neutral-800/20 py-2 px-4 rounded-2xl border border-neutral-100/10">
        <ul className="flex flex-col md:flex-row gap-3 justify-center items-center">
          <Fade cascade direction="left" damping={1} triggerOnce="true">
            <li>
              <Image
                priority
                src={ReactIcon}
                width={44}
                height={44}
                alt="code symbol svg"
              />
            </li>
          </Fade>
          <Fade cascade direction="right" damping={1} triggerOnce="true">
            <li className="flex md:text-sm xl:text-lg">
              <Image
                priority
                src={NextIcon}
                width={44}
                height={44}
                alt="design svg"
              />
            </li>
          </Fade>
          <Fade cascade direction="left" damping={0.3} triggerOnce="true">
            <li className="flex md:text-sm xl:text-lg">
              <Image
                priority
                src={TailwindIcon}
                width={44}
                height={44}
                alt="team collaboration svg"
              />
            </li>
          </Fade>
          <Fade cascade direction="left" damping={0.3} triggerOnce="true">
            <li className="flex md:text-sm xl:text-lg">
              <Image
                priority
                src={JSIcon}
                width={44}
                height={44}
                alt="team collaboration svg"
              />
            </li>
          </Fade>
        </ul>
      </div>
    </main>
  );
};

export default Home;
