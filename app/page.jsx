import { Suspense } from "react";
import Image from "next/image";
import MainBio from "./components/MainBio";

const renderLoader = () => <p>Loading Images...</p>;

const About = () => {
  return (
    <>
      <section className="md:flex md:flex-col 2xl:grid 2xl:grid-cols-2 gap-2 lg:my-[10%]">
        <div className="lg:border-l lg:border-r lg:border-b border-cyan-900">
          <h2 className="py-1 lg:py- lg:block lg:mt-0 lg:mb-0 text-cyan-700 md:text-white lg:bg-cyan-800 text-xl lg:text-3xl text-center pl-1 tracking-wide">
            A Little Background
          </h2>
          <MainBio />
        </div>
        <div>
          <div className="flex flex-col p-2 md:flex-row 2xl:h-full border-cyan-900 bg-cyan-800">
            <Suspense fallback={renderLoader()}>
              <Image
                src="/images/profile_img.jpg"
                width={500}
                height={500}
                alt="image representing the author"
                className="md:w-1/2 2xl:my-2 border border-cyan-800 shadow-md shadow-black opacity-90"
              />
            </Suspense>
            <div className="text-white py-10 leading-relaxed mx-auto md:mx-6 md:w-1/2">
              <div className="text-center py-6">
                <h2 className="text-3xl">William Lowrimore</h2>
                <h3 className="text-lg">Nashville, TN</h3>
              </div>
              <h2 className="text-2xl text-center pb-2">Relevant Experience</h2>
              <ul className="list-disc pl-8 pt-6 xl:mx-[2%]">
                <li>Graphic Arts Associates (Design & Layout)</li>
                <li>Gamble Bros. Band (Graphic Design)</li>
                <li>Coroutine (Junior Software Engineer)</li>
                <li>Freelance Web Development (Full-Stack)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
