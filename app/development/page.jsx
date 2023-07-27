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
      <section className="grid grid-cols-2 gap-3 pl-4 mt-[2%] mb-10 border-l lg:mx-20 border-gray-900">
        <div>
          <h2 className="text-3xl text-cyan-700 tracking-wide">
            Professional Development
          </h2>
          <article className="pt-8 text-lg tracking-wide">
            <p className="pb-2">
              I attended and graduated from Vanderbilt University coding boot
              camp (2021 - 2022), completing the full-stack web development
              course. Working in the virtual classroom, I learned the
              fundamentals of React.js, Database Theory, MySQL, Command Line,
              HTML5, JavaScript, CSS3, and more.
            </p>
            <p className="pb-2">
              Upon completion of the boot camp, I continued my education through
              online courses, pair coding, and even a full-time role as Junior
              Software Engineer under the direct supervision of my mentor, and
              CTO of a Boulder, CO based software engineering firm.
            </p>
            <p className="pb-2">
              I continue to study, code, and create everyday. Although my
              certification is in full stack web development, I thrive in the
              front-end environment.
            </p>
          </article>
        </div>
        <div className="flex justify-center items-center">
          <div className="">
            <Suspense fallback={renderLoader()}>
              <Image
                src="/certificates/vandyCert.png"
                width={500}
                height={500}
                alt="image showing Vanderbilt certificate for web development."
                className="border border-cyan-800 rounded-md shadow-md shadow-black"
              />
            </Suspense>
          </div>
        </div>
      </section>
      <section className="bg-cyan-900 mx-20">
        <div className="flex justify-center space-x-6 px-20 mt-10">
          {certificates.map((certificate, index) => (
            <div key={`card-${index}`} className="flex flex-col">
              <div>
                <DevCard
                  certificate={certificate}
                  title={certificate.title}
                  priority={`${index}`}
                />
                <p className="font-semibold text-center">{certificate.title}</p>
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
