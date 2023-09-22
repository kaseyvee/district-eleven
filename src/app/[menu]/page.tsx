import { notFound } from "next/navigation";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menu | District Eleven",
};

import { getContentfulData } from "@/app/api/getContentfulData";
import getMenuType from "@/helpers/getMenuType";

import PageHeader from "@/components/menuPages/PageHeader";
import DietTable from "@/components/menuPages/food/DietTable";
import MenuSection from "@/components/menuPages/food/MenuSection";
import DrinkSection from "@/components/menuPages/drinks/DrinkSection";
import { MenuNav } from "@/components/menuPages/food/MenuNav";

export const dynamic = "force-static";

export default async function Menu({ params }: { params: { menu: string } }) {
  const slug = params.menu;

  const data: any = await getContentfulData();

  const menuTypes: any = {
    menu: {
      title: "All Day",
      type: "allDay",
    },
    "happy-hour": {
      title: "Happy Hour",
      type: "happyHour",
    },
    "take-out": {
      title: "Take-Out",
      type: "takeOut",
    },
  };

  if (slug !== "menu" && slug !== "happy-hour" && slug !== "take-out") {
    notFound();
  }

  const currentMenuType = menuTypes[slug].type;

  const menu = getMenuType(data.menu, currentMenuType);
  const drinks = getMenuType(data.drinks, currentMenuType);

  const allDayMenu = Object.entries(menu).map(([key, value]: [string, any]) => {
    if (value.length !== 0) {
      return (
        <MenuSection key={key} menuType={currentMenuType} menuItems={value} />
      );
    }
  });

  const allDayDrinksMenu = Object.entries(drinks).map(
    ([key, value]: [string, any]) => {
      if (value.length !== 0) {
        return (
          <DrinkSection
            key={key}
            menuType={currentMenuType}
            drinkItems={value}
          />
        );
      }
    }
  );

  return (
    <main className="menu-page page">
      <PageHeader
        menuType={currentMenuType}
        title={`${menuTypes[slug].title.toUpperCase()} MENU`}
      />
      <MenuNav menu={menu} />

      <div className="menu-page_sections">
        {allDayMenu}
        <DietTable diets={data.diets} />
      </div>

      <div className="menu-page_sections" id="drinks">
        <header className="menu-page_sections_drinks-header">
          <h2>Drinks</h2>
          <span>đồ uống</span>
        </header>
        <div className="menu-page_sections_drinks-list">{allDayDrinksMenu}</div>
      </div>

      <p className="menu-page_tax-blurb">taxes not included in prices</p>
    </main>
  );
}
