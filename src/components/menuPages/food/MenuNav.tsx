"use client";

import HeroButton from "@/components/HeroButton";
import { scrollToSection } from "@/helpers/scrollToSection";

export const MenuNav = ({ menu }: any) => {
  const menuSectionList = Object.entries(menu).map(([key, value]: [string, any]) => {
    if (value.length > 0) {
      return (
        <li key={key + "menu-nav"}>
          <HeroButton
            onClick={() => scrollToSection(`${key.toLowerCase()}`)}
            color="white"
            children={key.toUpperCase()}
            className="menu-nav-button"
          />
        </li>
      );
    }
  });

  return (
    <ul className="menu-page_nav">
        {menuSectionList}
        <li>
          <HeroButton
            onClick={() => scrollToSection("drinks")}
            color="white"
            children="DRINKS"
            className="menu-nav-button"
          />
        </li>
      </ul>
  );
}
