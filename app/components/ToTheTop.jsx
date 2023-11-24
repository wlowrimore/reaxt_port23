"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import ToHome from "../../public/images/svg/to_the_top.svg";

import "./ttt.css";

const ToTheTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={`${isVisible ? "visible" : "hidden"} fixed bottom-10 right-4 cursor-pointer lg:bottom-12 lg:right-8`}
      onClick={scrollToTop}>
      <Image
        src={ToHome}
        alt="back to home button"
        width={500}
        height={500}
        className="w-12 opacity-80 spin-icon"
      />
    </div>
  );
};

export default ToTheTop;
