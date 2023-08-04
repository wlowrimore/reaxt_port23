"use client";

import { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import DevCard from "./dev_card";

const renderLoader = () => <p>Loading Images...</p>;

const Development = () => {
  const [certificates, setCertificates] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/certificates");
      const json = await res.json();
      setCertificates(json);
    };
    fetchData();
  }, [setCertificates]);

  return (
    <>
      <section className="md:grid grid-cols-2 gap-3 mt-[2%] mb-10 lg:mx-20 ">
        <div>
          <h2 className="text-2xl lg:text-3xl text-cyan-800 pt-6 lg:text-white text-center lg:bg-cyan-800 tracking-wide">
            Professional Development
          </h2>
          <article className="py-4 lg:py-8 px-8 text-lg lg:text-xl border-l border-r border-b border-cyan-900 tracking-wide">
            <p className="pb-4">
              I attended and graduated from Vanderbilt University coding boot
              camp (2021 - 2022), completing the full-stack web development
              course. Working in the virtual classroom, I learned the
              fundamentals of React.js, Database Theory, MySQL, Command Line,
              HTML5, JavaScript, CSS3, and more.
            </p>
            <p className="pb-4">
              Upon completion of the boot camp, I continued my education through
              online courses, pair coding, and even a full-time role as Junior
              Software Engineer under the direct supervision of my mentor, and
              CTO of a Boulder, CO based software engineering firm.
            </p>
            <p className="pb-4">
              I continue to study, code, and create everyday. Although my
              certification is in full stack web development, I thrive in the
              front-end environment.
            </p>
          </article>
        </div>
        <div className="flex justify-center items-center pr-4">
          <div className="p-4 bg-cyan-800">
            <Suspense fallback={renderLoader()}>
              <Image
                src="/certificates/vandyCert.png"
                width={500}
                height={500}
                alt="image showing Vanderbilt certificate for web development."
                className="lg:w-full border border-cyan-800 rounded-md shadow-md shadow-black"
              />
            </Suspense>
          </div>
        </div>
      </section>
      <section className="bg-cyan-800 lg:mx-20">
        <div className="flex md:flex-row flex-col lg:flex-row justify-center md:space-x-6 px-8 lg:px-5 mt-10">
          {certificates.map((certificate, index) => (
            <div key={`card-${index}`} className="flex flex-col">
              <div>
                <DevCard
                  certificate={certificate}
                  title={certificate.title}
                  priority={`${index}`}
                />
                <p className="text-white text-lg tracking-wide font-semibold text-center pb-4">
                  {certificate.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* <div className="w-28 h-28">
        <Suspense fallback={renderLoader()}>
          <Image
            src="/images/camping_img.png"
            width={500}
            height={500}
            alt="image representing camping"
            className="relative z-60 top-6 left-16 border border-cyan-800 rounded-full shadow-md shadow-black"
          />
        </Suspense>
      </div>
      <div className="w-36 h-36">
        <Suspense fallback={renderLoader()}>
          <Image
            src="/images/team_work.png"
            width={500}
            height={500}
            alt="image representing team work"
            className="relative z-20 bottom-8 right-16 border border-cyan-800 rounded-full shadow-md shadow-black"
          />
        </Suspense>
      </div>
      <div className="w-72 h-72">
        <Suspense fallback={renderLoader()}>
          <Image
            src="/images/profile_img.jpg"
            width={500}
            height={500}
            alt="image representing the author"
            className="border border-cyan-800 rounded-full shadow-md shadow-black opacity-90"
          />
        </Suspense>
      </div>
      <div className="w-36 h-36">
        <Suspense fallback={renderLoader()}>
          <Image
            src="/images/music_img.jpg"
            width={500}
            height={500}
            alt="image representing music"
            className="relative z-20 top-12 left-0 border border-cyan-800 rounded-full shadow-md shadow-black"
          />
        </Suspense>
      </div>
      <div className="w-44 h-44">
        <Suspense fallback={renderLoader()}>
          <Image
            src="/images/creativity_img.jpg"
            width={500}
            height={500}
            alt="image representing creativity"
            className="relative z-50 right-14 bottom-8 border border-cyan-800 rounded-full shadow-md shadow-black"
          />
        </Suspense>
      </div>
      <div className="w-28 h-28">
        <Suspense fallback={renderLoader()}>
          <Image
            src="/images/basketball_img.jpg"
            width={500}
            height={500}
            alt="image representing basketball"
            className="relative z-50 right-36 top-20 border border-cyan-800 rounded-full shadow-md shadow-black"
          />
        </Suspense>
      </div> */}
    </>
  );
};
export default Development;
