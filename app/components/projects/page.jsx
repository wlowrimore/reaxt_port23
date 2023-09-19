"use client";

import { useState, useEffect, Suspense } from "react";
import { Fade } from "react-awesome-reveal";

import ProjectCard from "./project_card";

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
    <main
      id="projects"
      className="min-h-screen bg-custombg5 bg-fixed bg-no-repeat bg-cover bg-center flex flex-col justify-center"
    >
      <h2 className="2xl:text-xl text-orange-400 rounded-md pl-2 py-2 bg-gray-800 md:mx-[4.7rem] lg:mx-[12.7rem] xl:mx-[15.3rem] 2xl:mx-[37rem] uppercase">
        projects
      </h2>
      <div className="flex justify-center items-center px-4 py-6">
        <div className="md:grid md:grid-cols-2 xl:grid-cols-3 gap-10 2xl:mx-52">
          {projects.map((project, index) => (
            <div
              key={`card-${index}`}
              className="flex mb-8 bg-emerald-800 bg-opacity-40"
            >
              <Fade cascade direction="up" damping={2} triggerOnce="true">
                <ProjectCard
                  project={project}
                  title={project.title}
                  description={project.description}
                  url={project.repo_url}
                  tech={project.tech}
                  priority={`${index}`}
                />
              </Fade>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};
export default Projects;
