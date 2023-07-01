import DrinkItem from "./DrinkItem";

interface IProps {
  drinkItems: {
    soldOut?: boolean;
    type: string;
    name: string;
    brewery?: string;
    description?: string;
    size?: number;
    priceByGlass: number;
    priceByPitcher?: number;
    happyHourPrice?: number;
    takeOut: boolean;
    happyHour: boolean;
    alcoholContent?: number;
  }[];
  menuType: string;
}

const DrinkSection: React.FC<IProps> = ({ drinkItems, menuType }) => {
  const drinkType = drinkItems[0].type;

  const drinkList = drinkItems.map((drinkItem) => {
    return (
      <DrinkItem
        key={drinkItem.name}
        menuType={menuType}
        drinkItem={drinkItem}
      />
    );
  });

  return (
    <section className="drink-section" id={drinkType.toLowerCase()}>
      <div className="wrapper">
        <header className="drink-section_header">
          <h3>{drinkType}</h3>
          {drinkType === "beer on tap" && <span>16oz</span>}
          {drinkType === "shooter" && <span>round of 4 shots</span>}
        </header>
        <ul className="drink-section_drink-items">{drinkList}</ul>
      </div>
    </section>
  );
};

export default DrinkSection;
