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
    <>
      <section className="pl-6 my-6">
        <h2 className="text-3xl text-center text-white bg-cyan-700 tracking-wide mx-64">
          My Work
        </h2>
        <p className="flex text-xl justify-center tracking-wide pt-3">
          See more
          <span className="text-2xl pt-1 pl-1">
            <BiSolidRightArrowAlt />
          </span>
          &nbsp;
          <Link
            href="http://www.github.com/wlowrimore"
            rel="noopener noreferrer"
            target="_blank"
            className="text-cyan-800 hover:text-blue-500 hover:underline"
          >
            www.github.com/wlowrimore
          </Link>
        </p>
        <div className="w-[66.9%] h-[70%] my-3 mx-auto">
          <Suspense fallback={renderLoader()}>
            <Image
              src="/project_images/thePocket.png"
              width={500}
              height={500}
              alt="image representing the author's project called the Pocket"
              className="mb-2 w-[100%] h-[100%] border border-cyan-900 rounded shadow-md shadow-black"
            />
          </Suspense>
          <div className="flex">
            <h2 className="text-xl font-semibold">
              thePocket:&nbsp;
              <span className="text-sm font-normal">
                A Django-Python Full Stack Blog Styled with Tailwind CSS
              </span>
            </h2>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="grid grid-cols-2 gap-8 mx-52">
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
    </>
  );
};
export default Projects;
