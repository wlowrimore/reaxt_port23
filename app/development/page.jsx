"use client";

import { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import DevCard from "./dev_card";
import DevBio from "../components/DevBio";

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
      <section className="md:grid grid-cols-2 gap-3 mb-10 lg:mx-20 ">
        <div>
          <h2 className="text-2xl lg:text-3xl text-cyan-800 pt-6 lg:py-1 lg:text-white text-center lg:bg-cyan-800 tracking-wide">
            Professional Development
          </h2>
          <DevBio />
        </div>
        <div className="flex justify-center items-center md:pr-4">
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
    </>
  );
};

export default Development;
