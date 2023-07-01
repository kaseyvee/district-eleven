"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import NavItems from "./NavItems";

import Logo from "../../assets/logo.svg";
import Open from "../../assets/menu-open-button.svg";
import Close from "../../assets/menu-close-button.svg";

function NavBar({ data }: any) {
  const scrollUpStyle = {
    animation: "scrollUp 500ms ease-in-out forwards",
    backgroundColor: "#1E1E1E",
  };
  const scrollDownStyle = {
    animation: "scrollDown 500ms ease-in-out forwards",
  };

  const [scrollStyle, setScrollStyle] = useState<any>(scrollDownStyle);
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    addEventListener("resize", () => {
      setDisplay(false);
    });

    return () => {
      removeEventListener("resize", () => {
        setDisplay(false);
      });
    };
  }, []);

  function handleMenuToggle() {
    if (display) {
      return setDisplay(false);
    }
    return setDisplay(true);
  }

  function handleScrollEffect() {
    const position = window.scrollY;
    if (position > 200) {
      return setScrollStyle(scrollUpStyle);
    }
    return setScrollStyle(scrollDownStyle);
  }

  document.addEventListener("scroll", handleScrollEffect);

  return (
    <nav className="navbar" style={!display ? scrollStyle : {}}>
      <button
        onClick={handleMenuToggle}
        className={`navbar_menu-${display ? "close" : "open"}`}
        aria-expanded={display ? "true" : "false"}
        aria-label="mobile menu navigation"
      >
        {display ? <Close /> : <Open />}
      </button>

      <div className="navbar_main">
        <header className="navbar_main_header">
          <span className="navbar_main_header_district">DISTRICT</span>
          <span className="navbar_main_header_eleven">ELEVEN</span>
        </header>
        <NavItems data={data} />
      </div>
      <AnimatePresence>
        {display && (
          <motion.div
            className="navbar_overlay"
            initial={{ opacity: 0, y: 72 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -72 }}
          >
            <div className="navbar_overlay_items">
              <Logo
                alt="district eleven logo"
                className="navbar_overlay_items_logo"
                width={62}
                height={62}
              />
              <NavItems onClick={() => setDisplay(false)} data={data} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavBar;
