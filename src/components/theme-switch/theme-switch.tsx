import React from "react";
import { useTheme } from "../../context/theme-context";
import { BsMoon, BsSun } from "react-icons/bs";
import "./theme-switch.css";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  function Switch() {
    return (
      <button className="switch" onClick={toggleTheme}>
        {theme === "light" ? <BsSun /> : <BsMoon />}
      </button>
    );
  }

  return <Switch />;
}
