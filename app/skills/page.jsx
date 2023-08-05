"use client";

import { useState, useEffect, Suspend } from "react";
import Image from "next/image";
import Link from "next/link";

import SkillsCard from "./skills_card";

const renderLoader = () => <p>Loading Images...</p>;

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/skills");
      const json = await res.json();
      setSkills(json);
    };
    fetchData();
  }, []);

  return (
    <section className="lg:grid grid-cols-2 gap-12">
      <div className="lg:flex flex-col">
        <h2 className="text-2xl lg:text-3xl pt-6 lg:py-1 tracking-wide text-center text-cyan-700 lg:bg-cyan-800 lg:text-white">
          Languages & Technologies
        </h2>
        <div className="flex justify-center lg:pt-8 lg:p-6 lg:border border-cyan-900">
          <div className="lg:grid grid-cols-3 gap-3 w-full md:grid md:grid-cols-2">
            {skills.map((skill, index) => (
              <div key={`card-${index}`} className="flex justify-center">
                <div className="">
                  <SkillsCard
                    skill={skill}
                    name={skill.name}
                    priority={`${index}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="py-12 px-6 lg:my-24">
        <p className="text-xl tracking-wide leading-relaxed">
          Listed here, you will find a handful of frameworks, libraries, and
          programming languages. This list is limited for the purpose of
          providing a basic idea of some of the more commonly used software
          development tools.
        </p>
        <br />
        <p className="text-xl tracking-wide leading-relaxed">
          Any technologies not listed here, may in fact be a part of my
          skillset. To find out what other languages and technologies I have to
          offer, please contact me. I would be more than happy to discuss them
          with you.
        </p>
        <div className="text-center py-12 lg:py-24 leading-relaxed">
          <h2 className="text-4xl">William Lowrimore</h2>
          <h3 className="text-2xl">Nashville, TN 37214</h3>
          <h3 className="text-2xl">901.568.7941</h3>
          <h3 className="lg:text-xl text-cyan-700 hover:text-cyan-500">
            <Link href="mailto://wlowrimore@gmail.com">
              wlowrimore@gmail.com
            </Link>
          </h3>
          <h3 className="lg:text-xl text-cyan-700 hover:text-cyan-500">
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
    </section>
  );
};

export default Skills;
