export default function cleanUpMenuData(menu: any[], categories: any[]): any {
  const cleanMenuData = menu.map((item: any) => {
    const filteredDiets =
      item.fields.dietRestrictions?.map((diet: any) => ({
        dietaryType: diet.fields.dietaryType,
        image: diet.fields.logo.fields.file.url,
      })) || [];

    const filteredAddOns =
      item.fields.addOns?.map((addOn: any) => ({
        name: addOn.fields.name || null,
        description: addOn.fields.description || null,
        price: addOn.fields.price,
      })) || [];

    const output = {
      ...item.fields,
      category: item.fields.category.fields,
      dietRestrictions: filteredDiets,
      addOns: filteredAddOns,
    };

    return output;
  });

  const output: any = {};

  for (const category of categories) {
    const categoryVar = category.english.toLowerCase();

    output[categoryVar] = cleanMenuData.filter(
      (menuItem: any) => menuItem.category.english.toLowerCase() === categoryVar
    );
  }

  const orderedOutput: any = {};

  Object.keys(output)
    .sort()
    .forEach((key) => {
      orderedOutput[key] = output[key];
    });

  return orderedOutput;
}
