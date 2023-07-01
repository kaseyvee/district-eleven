import { client } from "@/contentful";
import cleanUpDrinksData from "@/helpers/cleanUpDrinksData";
import cleanUpMenuData from "@/helpers/cleanUpMenuData";

export async function getContentfulData() {
  try {
    const entries = await client.getEntries();
    if (entries.items) {
      const allEntries = entries.items;

      const rawDietsData = allEntries.filter((item) => {
        return item.sys.contentType.sys.id === "diet";
      });
      const rawCategoriesData = allEntries.filter((item) => {
        return item.sys.contentType.sys.id === "category";
      });
      const rawMenuData = allEntries.filter((item) => {
        return item.sys.contentType.sys.id === "menu";
      });
      const rawDrinksData = allEntries.filter((item) => {
        return item.sys.contentType.sys.id === "drinks";
      });
      const generalInfo = allEntries.filter((item) => {
        return item.sys.contentType.sys.id === "generalInfo";
      })[0].fields;

      const diets = rawDietsData.map((diet: any) => {
        return {
          dietaryType: diet.fields.dietaryType,
          image: diet.fields.logo.fields.file.url,
        };
      });
      const categories = rawCategoriesData.map((category) => {
        return category.fields;
      });
      const menu = cleanUpMenuData(rawMenuData, categories);
      const drinks = cleanUpDrinksData(rawDrinksData);

      const output = {
        diets,
        menu,
        drinks,
        generalInfo,
      };

      return output;
    }
  } catch (error: any) {
    console.log("Error fetching Contentful entries:", error.message);
  }
}
