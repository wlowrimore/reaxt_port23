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

        <div className="pt-24 flex justify-center items-center border-l border-r border-b border-cyan-900">
          <div className="w-36 h-36">
            <Suspense fallback={renderLoader()}>
              <Image
                src="/images/programming_img.jpg"
                width={500}
                height={500}
                alt="image representing coding"
                className="relative bottom-36 left-40 border border-cyan-800 rounded-full shadow-md shadow-black"
              />
            </Suspense>
          </div>
          <div className="w-36 h-36">
            <Suspense fallback={renderLoader()}>
              <Image
                src="/images/camping_img.png"
                width={500}
                height={500}
                alt="image representing camping"
                className="relative top-24 left-20 border border-cyan-800 rounded-full shadow-md shadow-black"
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
                className="relative bottom-4 right-20 border border-cyan-800 rounded-full shadow-md shadow-black"
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
                className="relative top-1 right-1 border border-cyan-800 rounded-full shadow-md shadow-black opacity-90"
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
                className="relative bottom-4 left-16 border border-cyan-800 rounded-full shadow-md shadow-black"
              />
            </Suspense>
          </div>
          <div className="w-36 h-36">
            <Suspense fallback={renderLoader()}>
              <Image
                src="/images/creativity_img.jpg"
                width={500}
                height={500}
                alt="image representing creativity"
                className="relative bottom-36 right-20 border border-cyan-800 rounded-full shadow-md shadow-black"
              />
            </Suspense>
          </div>
          <div className="w-36 h-36">
            <Suspense fallback={renderLoader()}>
              <Image
                src="/images/basketball_img.jpg"
                width={500}
                height={500}
                alt="image representing basketball"
                className="relative right-44 top-24 border border-cyan-800 rounded-full shadow-md shadow-black"
              />
            </Suspense>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
