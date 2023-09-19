"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Overlay1Marquee({ tech }) {
  const [technologies, setTechnologies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/technologies");
      const json = await res.json();
      setTechnologies(json);
    };
    fetchData();
  }, []);

  return (
    <>
      {technologies.map((tech) => (
        <div
          key={tech.id}
          className="px-8 2xl:px-24 py-3 flex-flex-col justify-center items-center"
        >
          <Image
            src={tech.image}
            alt={tech.name}
            width={500}
            height={500}
            className="w-12 py-1"
          />
          <p className="text-xs text-gray-950 text-center">{tech.name}</p>
        </div>
      ))}
    </>
  );
}
