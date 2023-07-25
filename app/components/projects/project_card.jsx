import { Suspense } from "react";
import Image from "next/image";

const renderLoader = () => <p>Loading Images...</p>;

const ProjectCard = ({ project }) => {
  return (
    <>
      <div className="my-6 h-[16.78em] border border-cyan-800 rounded-md shadow-lg shadow-black overflow-hidden">
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
      <div className="w-[31em]">
        <h2 className="text-lg font-semibold">{project.title}</h2>
        <p>{project.description}</p>
      </div>
    </>
  );
};
export default ProjectCard;
