"use client";
import PropTypes from "prop-types";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

function DarkLightSwitch() {
  const { systemTheme, theme, setTheme } = useTheme();

  const currentTheme = theme === "system" ? systemTheme : theme;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  });

  return (
    <div>
      {mounted && currentTheme === "dark" ? (
        <MdLightMode
          className="cursor-pointer text-lg hover:text-amber-200"
          onClick={() => setTheme("light")}
        ></MdLightMode>
      ) : (
        <MdDarkMode
          className="cursor-pointer text-lg hover:text-amber-200"
          onClick={() => setTheme("dark")}
        ></MdDarkMode>
      )}
    </div>
  );
}

DarkLightSwitch.propTypes = {};

export default DarkLightSwitch;
