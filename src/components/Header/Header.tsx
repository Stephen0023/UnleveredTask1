import React from "react";
import { motion } from "framer-motion";
import { links } from "../../lib/data";
import { useActiveSectionContext } from "../../context/active-section-context";
import clsx from "clsx";
import "./Header.css";
import ThemeSwitch from "../theme-switch/theme-switch";
import useLocalTime from "../../hooks/useLocalTime";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  const { time } = useLocalTime();

  return (
    <header className="header">
      <motion.div
        className="motionDiv"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>

      <nav className="nav">
        <ul className="ul">
          {links.map((link) => (
            <motion.li
              className="li"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <a
                className={clsx("link", {
                  activeLink: activeSection === link.name,
                })}
                href={`${link.hash}`}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}

                {link.name === activeSection && (
                  <motion.span
                    className="motionSpan"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </a>
            </motion.li>
          ))}
        </ul>
        <div className="navRight">
          <span className="time">{time}</span>
          <ThemeSwitch />
        </div>
      </nav>
    </header>
  );
}
