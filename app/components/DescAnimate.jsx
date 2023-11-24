"use client";

import React from "react";
import Typewriter from "typewriter-effect";

const DescAnimate = () => {
  return (
    <div className='flex flex-start w-full'>
      <h3 className="text-sm md:text-lg text-gray-200 uppercase py-4 w-full px-0 tracking-widest">
        <Typewriter
          options={{
            strings: [
              "{SWE Principles",
              "{CSS Frameworks",
              "{Eye for Detail",
              "{Rest API",
              "{Modern Web Dev",
              "{Mobile First",
              "{React Library",
              "{Next.js Framework",
              "{Advanced Concepts",
            ],
            autoStart: true,
            delay: 50,
            deleteSpeed: 50,
            cursor: "}",
            loop: true,
          }}
        />
      </h3>
    </div>
  );
};

export default DescAnimate;
