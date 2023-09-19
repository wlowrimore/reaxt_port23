import Marquee from "react-fast-marquee";

import TechMarquee from "./tech_marquee";

const TechOverlay = (tech) => {
  return (
    <Marquee speed="40">
      <div className="flex h-auto justify-center items-center bg-transparent">
        <TechMarquee tech={tech} />
        <TechMarquee tech={tech} />
        <TechMarquee tech={tech} />
        <TechMarquee tech={tech} />
        <TechMarquee tech={tech} />
      </div>
    </Marquee>
  );
};

export default TechOverlay;
