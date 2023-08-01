import { Suspense } from "react";
import Image from "next/image";

const renderLoader = () => <p>Loading Images...</p>;

const DevCard = ({ certificate }) => {
  return (
    <>
      <div className="my-6 w-full border border-cyan-800 rounded-md shadow-md shadow-black overflow-hidden">
        <Suspense fallback={renderLoader()}>
          <Image
            src={certificate.image}
            width={500}
            height={500}
            alt={certificate.title}
            className="w-full"
          />
        </Suspense>
      </div>
    </>
  );
};
export default DevCard;
