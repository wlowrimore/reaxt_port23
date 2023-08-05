import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";

const renderLoader = () => <p>Loading Images...</p>;

const Contact = () => {
  return (
    <div className="lg:my-20 flex flex-col justify-center items-center">
      <h1 className="text-3xl text-start pl-4 md:text-4xl lg:text-5xl xl:text-6xl lg:pl-32 xl:pl-0 font-bold pt-10 pb-20">
        Let&apos;s create something unique together.
      </h1>

      <div className="w-72 h-72 mb-12">
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
      <div className="text-center py-6 leading-relaxed">
        <h2 className="text-4xl">William Lowrimore</h2>
        <h3 className="text-2xl">Nashville, TN 37214</h3>
        <h3 className="text-2xl">901.568.7941</h3>
        <h3 className="text-xl text-cyan-700 hover:text-cyan-500">
          <Link href="mailto://wlowrimore@gmail.com">wlowrimore@gmail.com</Link>
        </h3>
        <h3 className="text-xl text-cyan-700 hover:text-cyan-500">
          <Link
            href="https://www.linkedin.com/in/william-lowrimore-dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.linkedin.com
          </Link>
        </h3>
      </div>
    </div>
  );
};
export default Contact;
