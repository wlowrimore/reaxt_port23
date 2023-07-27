import { Suspense } from "react";
import Image from "next/image";

const renderLoader = () => <p>Loading Images...</p>;

const About = () => {
  return (
    <section className="grid grid-cols-2 gap-2 my-[10%] lg:mx-20">
      <div className="border-l border-r border-b border-cyan-900">
        <h2 className="bg-cyan-800 text-3xl text-center text-white pl-1 tracking-wide">
          Background
        </h2>
        <article className="pt-8 px-8 text-lg tracking-wide">
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

      <div>
        <h2 className="bg-cyan-800 text-center text-3xl text-white pr-1 tracking-wide">
          CREATE . CODE . COLLABORATE
        </h2>

        <div className="pt-20 flex justify-center items-center border-l border-r border-b border-cyan-900">
          <div className="w-44 h-44">
            <Suspense fallback={renderLoader()}>
              <Image
                src="/images/programming_img.jpg"
                width={500}
                height={500}
                alt="image representing coding"
                className="relative z-10 bottom-24 left-32 border border-cyan-800 rounded-full shadow-md shadow-black"
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
          <div className="w-80 h-80">
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
      </div>
    </section>
  );
};
export default About;
