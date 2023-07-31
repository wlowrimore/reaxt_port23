"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { FaSun, FaRegMoon } from "react-icons/fa";

const DarkModeBtn = () => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div>
      {currentTheme === "dark" ? (
        <FaSun
          className="h-6 w-6 cursor-pointer text-orange-200 hover:text-orange-300"
          onClick={() => {
            setTheme("light");
          }}
        />
      ) : (
        <FaRegMoon
          className="h-6 w-6 cursor-pointer text-yellow-50 hover:text-cyan-400"
          onClick={() => {
            setTheme("dark");
          }}
        />
      )}
    </div>
  );
};
export default DarkModeBtn;
