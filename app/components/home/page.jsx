"use client";

import { Suspense } from "react";
import { Fade } from "react-awesome-reveal";
import Image from "next/image";
import Link from "next/link";
import DescAnimate from "../DescAnimate";

import CodeIcon from "/public/images/svg/code.svg";
import DesignIcon from "/public/images/svg/design.svg";
import TeamIcon from "/public/images/svg/team.svg";

import "./home.css";

const Home = () => {
  return (
    <main className="min-h-screen bg-custombg1 bg-no-repeat bg-fixed bg-cover bg-center pt-8 md:py-[6rem] lg:py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:ml-[5rem] 2xl:mx-[20rem] 2xl:mt-[12rem]">
        {/* left section of grid */}

        <section className="flex flex-col md:col-span-4 lg:col-span-1 justify-center lg:items-start items-center md:pt-[4rem] md:pb-[6rem] mx-6 md:mx-[4rem]">
          <div>
            <p className="text-2xl text-center md:text-start md:text-3xl xl:text-5xl text-orange-400">
              Hello, I&apos;m
            </p>
            <h1 className="text-2xl md:text-4xl xl:text-5xl pb-4 text-gray-200">
              William&nbsp;<span className="text-orange-400">Lowrimore</span>
            </h1>
          </div>

          <div>
            <h1 className="uppercase flex flex-col md:flex-row w-full text-xl md:text-start text-center md:text-2xl xl:text-4xl text-orange-400">
              Web Developer
              <span className="text-gray-200">Front end</span>
            </h1>
          </div>

          {/* typing component */}

          <DescAnimate />

          {/* buttons group */}

          <div className="flex h-full items-center 2xl:mt-8">
            <button
              href="/contact"
              type="button"
              className="hidden md:block md:bg-orange-400 rounded-sm text-xl text-gray-950 font-semibold hover:bg-transparent hover:text-orange-400 px-1 uppercase"
            >
              reach out
            </button>
            &nbsp;
            <button type="button">
              <Link
                href="/resume/swfr_resume_8-23.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="swfr_resume_8-23.pdf"
                className="hidden md:block uppercase md:px-2 text-lg text-gray-200 tracking-wider hover:text-orange-400"
              >
                get resume
              </Link>
            </button>
          </div>
        </section>

        {/* right section of grid */}

        <section className="flex flex-col justify-center items-center mx-6 md:pl-[4rem] md:py-[2rem]">
          <Image
            src="/images/profile_img.jpg"
            width={500}
            height={500}
            alt="image representing the author"
            className="self rounded-md md:ml-[20rem] lg:ml-0 md:rounded-full border md:border-4 border-orange-200"
          />
        </section>
      </div>

      {/* list of traits */}

      <div className="flex justify-center w-full lg:pl-[1rem] lg:pr-[2.2rem] 2xl:pl-[14.5rem] 2xl:pr-[22.7rem]">
        <ul className="w-full flex flex-col lg:flex-row items-center justify-center mx-4 my-6 text-[1.3rem] tracking-wide text-gray-100 uppercase space-y-2">
          <Fade cascade direction="left" damping={1} triggerOnce="true">
            <li className="flex w-full justify-center mt-2">
              <Image
                priority
                src={CodeIcon}
                width={32}
                height={32}
                alt="code symbol svg"
                className="pr-[0.5rem]"
              />
              meticulous code
            </li>
          </Fade>
          <Fade cascade direction="right" damping={1} triggerOnce="true">
            <li className="flex w-full justify-center">
              <Image
                priority
                src={DesignIcon}
                width={32}
                height={32}
                alt="design svg"
                className="pr-[0.5rem]"
              />
              creative design
            </li>
          </Fade>
          <Fade cascade direction="left" damping={0.3} triggerOnce="true">
            <li className="flex w-full justify-center">
              <Image
                priority
                src={TeamIcon}
                width={32}
                height={32}
                alt="team collaboration svg"
                className="pr-[0.5rem]"
              />
              collaboration
            </li>
          </Fade>
        </ul>
      </div>
    </main>
  );
};

export default Home;
