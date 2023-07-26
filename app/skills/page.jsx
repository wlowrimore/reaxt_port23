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
    <section className="pl-3 py-20 mb-[25em] border-l border-gray-900">
      <h2 className="text-3xl text-cyan-700 tracking-wide">Skills</h2>
      <div className="flex justify-center pt-8">
        <div className="grid grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div key={`card-${index}`} className="flex">
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
