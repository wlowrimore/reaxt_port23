import { Suspense } from "react";
import Image from "next/image";

const renderLoader = () => <p>Loading Images...</p>;

const SkillsCard = ({ skill }) => {
  return (
    <>
      <div className="flex items-center justify-center bg-gray-100 mt-6 mb-2 w-[16em] h-[8em] text-center border border-cyan-800 rounded-md shadow-md shadow-black overflow-hidden">
        <Suspense fallback={renderLoader()}>
          <Image
            src={skill.image}
            width={500}
            height={500}
            alt={skill.name}
            className="object-contain w-[45%]"
          />
        </Suspense>
      </div>
      <p>{skill.name}</p>
    </>
  );
};
export default SkillsCard;
