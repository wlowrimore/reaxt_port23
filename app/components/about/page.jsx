"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import { Fade } from "react-awesome-reveal";

import SelfGig from "/public/images/self_gig.jpg";
import FamPenguin from "/public/images/fam_penguin.jpg";
import Bio from "./Bio";

const About = () => {
  return (
    <div className="min-h-screen bg-custombg2 bg-fixed bg-no-repeat bg-cover flex flex-col justify-center bg-center">
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:mx-[24rem]">
        {/* left side grid */}
        <section className="flex items-center">
          <Fade
            cascade
            direction="up"
            damping={1}
            triggerOnce="true"
            className="flex flex-col items-start relative 2xl:right-2"
          >
            <Image
              src={FamPenguin}
              width={500}
              height={500}
              alt="William with family"
              className="rounded-md shadow-md shadow-slate-600"
            />
            <div className="absolute w-44 2xl:w-96 z-10 left-[-11rem] 2xl:left-[-14rem] top-[6rem] 2xl:top-[5rem]">
              <Image
                src={SelfGig}
                width={500}
                height={500}
                alt="William performing music"
                className="rounded-md shadow-md shadow-slate-600"
              />
            </div>
          </Fade>
        </section>

        {/* left side grid */}
        <section className="2xl:mx-8 my-4">
          <h2 className="2xl:text-xl text-orange-400 md:rounded-md pl-2 py-2 md:mx-3 bg-gray-800 uppercase">
            About
          </h2>
          <Fade
            direction="left"
            damping={1}
            triggerOnce="true"
            className="flex flex-wrap mt-4 w-full overflow-y-auto"
          >
            <Bio />
            <div className="mx-4 lg:grid grid-cols-2">
              <div className="flex flex-col">
                <div className="flex items-center">
                  <h2 className="2xl:text-xl font-semibold">Name:</h2>&nbsp;
                  <p className="2xl:text-lg">William Lowrimore</p>
                </div>
                <div className="flex">
                  <h2 className="2xl:text-xl font-semibold">Location:</h2>&nbsp;
                  <p className="2xl:text-lg">Nashville, TN</p>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex">
                  <h2 className="2xl:text-xl font-semibold">Email:</h2>&nbsp;
                  <Link
                    href="mailto://wlowrimore@gmail.com"
                    className="text-gray-800 underline 2xl:text-lg"
                  >
                    wlowrimore@gmail.com
                  </Link>
                </div>
                <div>
                  <div className="flex">
                    <h2 className="2xl:text-xl font-semibold">Education:</h2>
                    &nbsp;
                    <p className="2xl:text-lg">Vanderbilt University</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-start mx-4 text-center 2xl:pt-6">
              <p className="2xl:text-[1.5rem] font-semibold">
                Full Stack Web Development Certification
              </p>
            </div>
          </Fade>
        </section>
      </div>
    </div>
  );
};

export default About;
