export default function cleanUpDrinksData(drinks: any) {
  const filteredDrinks = drinks.map((drink: any) => {
    return drink.fields;
  });

  const categories = [
    "cocktail",
    "shooter",
    "beer on tap",
    "soju",
    "sake",
    "bottled beer",
    "non-alcoholic",
  ];
  const output: any = {};

  for (let category of categories) {
    output[category] = filteredDrinks.filter(
      (drinkItem: any) => drinkItem.type.toLowerCase() === category
    );
  }

  const alphabetizedTaps = output["beer on tap"].sort((a: any, b: any) => {
    const nameA = a.brewery.toLowerCase();
    const nameB = b.brewery.toLowerCase();

    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }

    return 0;
  });

  const cleanDrinksData = {
    cocktails: output.cocktail,
    shooters: output.shooter,
    beerOnTap: alphabetizedTaps,
    bottledBeer: output["bottled beer"],
    soju: output.soju,
    sake: output.sake,
    nonAlcoholic: output["non-alcoholic"],
  };

  return cleanDrinksData;
}
