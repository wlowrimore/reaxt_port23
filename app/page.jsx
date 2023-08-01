import { Suspense } from "react";
import Image from "next/image";

const renderLoader = () => <p>Loading Images...</p>;

const About = () => {
  return (
    <>
      <section className="lg:grid grid-cols-2 gap-2 my-[10%] lg:mx-20">
        <div className="lg:border-l lg:border-r lg:border-b border-cyan-900">
          <h2 className="hidden lg:block bg-cyan-800 text-xl lg:text-3xl text-center text-white pl-1 tracking-wide">
            A Little Background
          </h2>
          <article className="lg:pt-8 px-4 lg:px-8 text-lg tracking-wide">
            <p className="pb-2">
              I am a Software Engineer with just under one year of professional
              experience in Full Stack development. I have a passion for the
              Front End, yet keep a firm understanding of, and respect for Back
              End programming and logic.
            </p>
            <p className="pb-2">
              Integrating an OHIF (Open Health Imaging Foundation) Imaging
              Platform with the React 18 Library was one of my favorite tasks
              and accomplishments. Though it was extremely challenging, the
              outcome was very rewarding.
            </p>
            <p className="pb-2">
              My background is firmly anchored in the arts, particularly music.
              I beleive that my years as a professional recording artist,
              performer, writer, and producer give me a solid foundation built
              from my experience with collaboration and creative thinking. These
              attributes translate fluently into my role as a Software Engineer.
            </p>
          </article>
        </div>

        <div>
          <div className="flex justify-center items-center">
            <div className="lg:flex w-full p-4 border-cyan-900 bg-cyan-800">
              <Suspense fallback={renderLoader()}>
                <Image
                  src="/images/profile_img.jpg"
                  width={500}
                  height={500}
                  alt="image representing the author"
                  className="border border-cyan-800 shadow-md shadow-black opacity-90"
                />
              </Suspense>
              <div className="text-white py-10 leading-relaxed">
                <div className="text-center py-6">
                  <h2 className="text-3xl">William Lowrimore</h2>
                  <h3 className="text-lg">Nashville, TN</h3>
                </div>
                <h2 className="text-2xl text-center pb-2">
                  Relevant Experience
                </h2>
                <ul className="list-disc pl-8">
                  <li>Graphic Arts Associates (Design & Layout)</li>
                  <li>Rockingchair Records (Graphic Design)</li>
                  <li>Coroutine (Junior Software Engineer)</li>
                  <li>Freelance Web Development (Full-Stack)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default About;
