"use client";

import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import Projects from "./components/projects/projects";
import ProjectCard from "./components/projects/project_card";

const renderLoader = () => <p>Loading Images...</p>;

export default function Home(project, useState, useEffect) {
  return (
    <main className="my-10">
      <section className="grid grid-cols-2 gap-3 pl-3 mb-20 border-l border-gray-900">
        <div>
          <h2 className="text-3xl text-cyan-700 tracking-wide">Background</h2>
          <article className="pr-12 pt-4">
            I am a Software Engineer with just under one year of professional
            experience with Full Stack development. I have developed a passion
            for the Front End, yet keep a firm understanding of, and respect for
            Back End programming and logic.
            <br />
            <br />
            Integrating an OHIF (Open Health Imaging Foundation) Imaging
            Platform with the React 18 Library was one of my favorite tasks and
            accomplishments. Though it was extremely challenging, the outcome
            was very rewarding.
            <br />
            <br />
            My background is firmly anchored in the arts, particularly music. I
            beleive that my years as a professional recording artist, performer,
            writer, and producer give me a solid foundation built from
            collaboration and creative thinking. These attributes translate
            fluently into my role as a Software Engineer.
          </article>
        </div>
        <div className="flex h-[100%] border border-cyan-900 rounded shadow-md shadow-black">
          <div className="">
            <Suspense fallback={renderLoader()}>
              <Image
                src="/images/music_art_work.jpg"
                width={500}
                height={500}
                alt="image representing music"
                className="mb-2 w-[100%] h-[100%]"
              />
            </Suspense>
          </div>
          <div className="">
            <Suspense fallback={renderLoader()}>
              <Image
                src="/images/coding.jpg"
                width={500}
                height={500}
                alt="image representing coding"
                className="mb-2 w-[100%] h-[100%]"
              />
            </Suspense>
          </div>
        </div>
      </section>
      {/* ---------- Pojects Section ---------- */}
      <section>
        <Projects
          project={project}
          useState={useState}
          useEffect={useEffect}
          className="grid grid-cols-3 gap-3"
        />
      </section>
    </main>
  );
}
