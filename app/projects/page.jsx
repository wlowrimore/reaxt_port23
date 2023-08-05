"use client";

import { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import ProjectCard from "./project_card";

import { BiSolidRightArrowAlt } from "react-icons/bi";

const renderLoader = () => <p>Loading Images...</p>;

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/projects");
      const json = await res.json();
      setProjects(json);
    };
    fetchData();
  }, []);

  return (
    <section className="px-4 lg:pl-6 lg:my-6">
      <h2 className="text-xl pt-4 lg:pt-0 lg:text-3xl text-center text-cyan-700 md:text-white lg:bg-cyan-800 tracking-wide lg:mx-72">
        My Work
      </h2>
      <p className="flex lg:text-xl justify-center tracking-wide pt-3">
        <Link
          href="http://www.github.com/wlowrimore"
          rel="noopener noreferrer"
          target="_blank"
          className="text-cyan-700 hover:text-cyan-600 hover:underline"
        >
          www.github.com/wlowrimore
        </Link>
      </p>
      <div className="lg:w-[66.9%] lg:h-[70%] my-3 mx-auto">
        <Suspense fallback={renderLoader()}>
          <Image
            src="/project_images/thePocket.png"
            width={500}
            height={500}
            alt="image representing the author's project called the Pocket"
            className="mb-2 w-[100%] border border-cyan-900 rounded shadow-md shadow-black"
          />
        </Suspense>
        <div className="flex">
          <h2 className="text-xl font-semibold">
            <span className="bg-cyan-700 px-2 text-white rounded-sm">
              Feature
            </span>{" "}
            - &nbsp; thePocket:&nbsp;
            <span className="text-sm font-normal">
              A Django-Python Full Stack Blog Styled with Tailwind CSS
            </span>
          </h2>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="2xl:grid 2xl:grid-cols-2 gap-8 2xl:mx-52">
          {projects.map((project, index) => (
            <div key={`card-${index}`} className="flex">
              <div>
                <ProjectCard
                  project={project}
                  title={project.title}
                  description={project.description}
                  url={project.repo_url}
                  tech={project.tech}
                  priority={`${index}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Projects;
