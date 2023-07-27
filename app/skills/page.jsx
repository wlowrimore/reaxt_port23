"use client";

import { useState, useEffect, Suspend } from "react";
import Image from "next/image";

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
    <section className="mx-20 my-6">
      <h2 className="text-3xl tracking-wide text-center mx-8 bg-cyan-800 text-white">
        Skills
      </h2>
      <div className="flex justify-center pt-8">
        <div className="grid grid-cols-4 w-full">
          {skills.map((skill, index) => (
            <div key={`card-${index}`} className="flex justify-center">
              <div>
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
    </section>
  );
};
export default Skills;
