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
      <Fade cascade direction="up" damper={0.7} triggerOnce={true}>
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
                className="aspect-4/3 cursor-pointer hover:opacity-5 border-white rounded-md max-w-[18rem] max-h-[18rem] min-h-[16rem] min-w-[16rem]"
              />
            </Suspense>
            <div className=" project-info">
              <Image
                src={Live}
                alt="site link"
                width={500}
                height={500}
                className="text-gray-200 w-12"
              />
              <h1 className="">{project.description}</h1>
            </div>
          </Link>
        </div>
      </Fade>
    </>
  );
};

export default ProjectCard;
