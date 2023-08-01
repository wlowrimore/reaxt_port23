import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

const renderLoader = () => <p>Loading Images...</p>;

const ProjectCard = ({ project }) => {
  return (
    <>
      <div className="my-6 h-[10em] lg:h-[16.78em] border border-cyan-800 rounded-md shadow-lg shadow-black overflow-hidden">
        <Suspense fallback={renderLoader()}>
          <Image
            src={project.image}
            width={500}
            height={500}
            alt={project.title}
            className="object-fit"
          />
        </Suspense>
      </div>
      <div className="relative z-10 bottom-[18%] left-[88%]">
        <Link
          href={project.repo_url}
          rel="noopener noreferrer"
          target="_blank"
          className="text-yellow-600 text-3xl lg:text-5xl hover:text-yellow-800"
        >
          <FaGithub />
        </Link>
      </div>
      <div className="mt-[-12%] mb-6 w-[18em] lg:w-[31em]">
        <h2 className="text-lg font-semibold">{project.title}</h2>
        <p className="pb-2">{project.description}</p>
        <p className="text-cyan-800">{project.tech}</p>
      </div>
    </>
  );
};
export default ProjectCard;
