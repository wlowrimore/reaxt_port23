import { Suspense } from "react";
import Image from "next/image";

const renderLoader = () => <p>Loading Images...</p>;

const SkillsCard = ({ skill }) => {
  return (
    <>
      <div className="flex items-center justify-center my-6 w-[18em] h-[10em] text-center border border-cyan-800 rounded-md shadow-md shadow-black overflow-hidden">
        <Suspense fallback={renderLoader()}>
          <Image
            src={skill.image}
            width={500}
            height={500}
            alt={skill.name}
            className="object-contain w-[50%]"
          />
        </Suspense>
      </div>
      <p>{skill.name}</p>
    </>
  );
};
export default SkillsCard;
