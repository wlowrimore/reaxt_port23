"use client";

import { Suspense, useState } from "react";
import { Fade } from "react-awesome-reveal";
import Image from "next/image";
import Link from "next/link";

import Live from "../../../public/images/svg/liveIcon.svg";
import "./projects.css";
const renderLoader = () => <p>Loading Images...</p>;

const ProjectCard = ({ project }) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <>
      <div className="card">
        <Link
          href={project.deployed_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Suspense fallback={renderLoader()}>
            <Image
              src={project.image}
              width={1000}
              height={1000}
              alt={project.title}
              className="transform cursor-pointer border border-white rounded-md transition hover:opacity-20 2s ease-linear"
            />
          </Suspense>
        </Link>
      </div>

      <div className="project-info-container">
        <div className="project-info">
          <Image
            src={Live}
            alt="site link"
            width={500}
            height={500}
            className="text-gray-200 w-14"
          />
          <h1 className="">{project.description}</h1>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
