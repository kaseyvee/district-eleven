"use client";

import { useEffect, useState } from "react";

import HeroButton from "@/components/HeroButton";
import { scrollToSection } from "@/helpers/scrollToSection";

export const MenuNav = ({ menu }: any) => {
  const [currentSection, setCurrentSection] = useState<string>(
    Object.keys(menu)[0]
  );

  const menuSections = [...Object.keys(menu), "drinks"];

  useEffect(() => {
    const handleScroll = () => {
      let maxVisibleRatio = 0;
      let newCurrentSection = currentSection;

      menuSections.forEach((menuSection) => {
        const target = document.getElementById(menuSection);

        if (target) {
          const rect = target.getBoundingClientRect(); // getBoundingClientRect() gets dimensions and position of target relative to the viewport
          const visibleHeight =
            Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
          const sectionHeight = rect.height;

          // Calculate the ratio of visible height to section height
          const visibleRatio = visibleHeight / sectionHeight;

          // Check if the section is more visible than the previously most visible section
          if (visibleRatio > maxVisibleRatio) {
            maxVisibleRatio = visibleRatio;
            newCurrentSection = menuSection;
          }
        }
      });

      setCurrentSection(newCurrentSection);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuSections, currentSection]);

  const menuSectionList = Object.entries(menu).map(
    ([key, value]: [string, any]) => {
      if (value.length > 0) {
        const menuSection = key.toLowerCase();

        return (
          <li key={key + "menu-nav"}>
            <HeroButton
              onClick={() => scrollToSection(menuSection)}
              color="white"
              children={menuSection.toUpperCase()}
              className={`menu-nav-button ${
                currentSection === menuSection ? "current-section" : ""
              }`}
            />
          </li>
        );
      }
    }
  );

  return (
    <ul className="menu-nav">
      {menuSectionList}
      <li>
        <HeroButton
          onClick={() => scrollToSection("drinks")}
          color="white"
          children="DRINKS"
          className={`menu-nav-button ${
            currentSection === "drinks" ? "current-section" : ""
          }`}
        />
      </li>
    </ul>
  );
};
