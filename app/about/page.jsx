import { Suspense } from "react";
import Image from "next/image";

const renderLoader = () => <p>Loading Images...</p>;

const About = () => {
  return (
    <section className="grid grid-cols-2 gap-3 pl-4 my-[10%] border-l lg:mx-20 border-gray-900">
      <div>
        <h2 className="text-3xl text-cyan-700 tracking-wide">Background</h2>
        <article className="pt-8 text-lg tracking-wide">
          <p className="pb-2">
            I am a Software Engineer with just under one year of professional
            experience in Full Stack development. I have a passion for the Front
            End, yet keep a firm understanding of, and respect for Back End
            programming and logic.
          </p>
          <p className="pb-2">
            Integrating an OHIF (Open Health Imaging Foundation) Imaging
            Platform with the React 18 Library was one of my favorite tasks and
            accomplishments. Though it was extremely challenging, the outcome
            was very rewarding.
          </p>
          <p className="pb-2">
            My background is firmly anchored in the arts, particularly music. I
            beleive that my years as a professional recording artist, performer,
            writer, and producer give me a solid foundation built from my
            experience with collaboration and creative thinking. These
            attributes translate fluently into my role as a Software Engineer.
          </p>
        </article>
      </div>
      <div className="flex justify-center items-center">
        <div className="w-44 h-44">
          <Suspense fallback={renderLoader()}>
            <Image
              src="/images/programming_img.jpg"
              width={500}
              height={500}
              alt="image representing coding"
              className="relative z-10 bottom-24 left-40 border border-cyan-800 rounded-full shadow-md shadow-black"
            />
          </Suspense>
        </div>
        <div className="w-28 h-28">
          <Suspense fallback={renderLoader()}>
            <Image
              src="/images/camping_img.png"
              width={500}
              height={500}
              alt="image representing camping"
              className="relative z-60 top-6 left-16 border border-cyan-800 rounded-full shadow-md shadow-black"
            />
          </Suspense>
        </div>
        <div className="w-36 h-36">
          <Suspense fallback={renderLoader()}>
            <Image
              src="/images/team_work.png"
              width={500}
              height={500}
              alt="image representing team work"
              className="relative z-20 bottom-8 right-16 border border-cyan-800 rounded-full shadow-md shadow-black"
            />
          </Suspense>
        </div>
        <div className="w-72 h-72">
          <Suspense fallback={renderLoader()}>
            <Image
              src="/images/profile_img.jpg"
              width={500}
              height={500}
              alt="image representing the author"
              className="border border-cyan-800 rounded-full shadow-md shadow-black opacity-90"
            />
          </Suspense>
        </div>
        <div className="w-36 h-36">
          <Suspense fallback={renderLoader()}>
            <Image
              src="/images/music_img.jpg"
              width={500}
              height={500}
              alt="image representing music"
              className="relative z-20 top-12 left-0 border border-cyan-800 rounded-full shadow-md shadow-black"
            />
          </Suspense>
        </div>
        <div className="w-44 h-44">
          <Suspense fallback={renderLoader()}>
            <Image
              src="/images/creativity_img.jpg"
              width={500}
              height={500}
              alt="image representing creativity"
              className="relative z-50 right-14 bottom-8 border border-cyan-800 rounded-full shadow-md shadow-black"
            />
          </Suspense>
        </div>
        <div className="w-28 h-28">
          <Suspense fallback={renderLoader()}>
            <Image
              src="/images/basketball_img.jpg"
              width={500}
              height={500}
              alt="image representing basketball"
              className="relative z-50 right-36 top-20 border border-cyan-800 rounded-full shadow-md shadow-black"
            />
          </Suspense>
        </div>
      </div>
    </section>
  );
};
export default About;
