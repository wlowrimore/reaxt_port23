"use client";

import { useState, useEffect } from "react";

export default function FooterMarquee({ tech }) {
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
        <div key={tech.id}>
          <ul>
            <li>{tech.name}</li>
          </ul>
        </div>
      ))}
    </>
  );
}
