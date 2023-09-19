"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import ToHome from "../../public/images/svg/to_the_top.svg";

const handleClick = (e) => {
  e.preventDefault();

  const href = e.currentTarget.href;
  const targetId = href.replace(/.*\#/, "");

  const elem = document.getElementById(targetId);
  elem?.scrollIntoView({ behavior: "smooth" });
};

const ToTheTop = () => {
  return (
    <div className="hidden md:block">
      <Link
        onClick={handleClick}
        href={"#home"}
        className="fixed bottom-10 right-4 lg:bottom-12 lg:right-8"
      >
        <Image
          src={ToHome}
          alt="back to home button"
          width={500}
          height={500}
          className="w-10 opacity-50"
        />
      </Link>
    </div>
  );
};

export default ToTheTop;
