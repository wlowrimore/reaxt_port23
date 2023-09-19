"use client";

import React from "react";
import Typewriter from "typewriter-effect";

const DescAnimate = () => {
  return (
    <div>
      <h3 className="text-sm md:text-xl text-gray-200 uppercase py-4 w-full px-0 tracking-widest">
        <Typewriter
          options={{
            strings: [
              "{creative UI designs",
              "{Reusable Components",
              "{Single Page Applications",
              "{Model View Controller",
              "{Model View Template",
              "{Mobile First Development",
              "{react hooks",
              "{search engine optimization",
              "{APIs",
              "{agile methodologies",
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
