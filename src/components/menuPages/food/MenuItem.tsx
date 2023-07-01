interface IProps {
  menuItem: {
    soldOut: boolean;
    category: {
      english: string;
      vietnamese: string;
    };
    name: string;
    subHeading?: string;
    description: string;
    happyHour: boolean;
    happyHourPrice?: number;
    price: number;
    takeOut: boolean;
    dietRestrictions: {
      dietaryType: String;
      image: string;
    }[];
    addOns?: {
      name?: string;
      description?: string;
      price: number;
    }[];
  };
  menuType: string;
}

const MenuItem: React.FC<IProps> = ({ menuItem, menuType }) => {
  const itemVariations = menuItem.addOns?.map((variation) => {
    return (
      <div
        key={variation.name || variation.description}
        className="menu-item_variation"
      >
        <div className="menu-item_variation_words">
          <span>+</span>
          {variation.name && <header>{variation.name}</header>}
          {variation.description && <p>{variation.description}</p>}
        </div>

        <div className="menu-item_variation_price">
          {variation.price && <span>{variation.price}</span>}
        </div>
      </div>
    );
  });

  const diets = menuItem.dietRestrictions?.map((diet) => {
    return (
      <img
        key={menuItem.name + diet.dietaryType}
        src={diet.image}
        alt={`${diet.dietaryType}`}
        width={16}
        height={16}
      />
    );
  });

  return (
    <li className={`menu-item ${menuItem.soldOut ? `sold-out` : ""}`}>
      <div className="menu-item_main">
        <div className="menu-item_main_words">
          <header>{menuItem.name}</header>
          {menuItem.subHeading && <span>{menuItem.subHeading}</span>}
          {menuItem.dietRestrictions.length > 0 && (
            <div className="menu-item_main_words_diets">{diets}</div>
          )}
          <p>{menuItem.description}</p>
        </div>

        <div className="menu-item_main_price">
          <span>{menuType === "happyHour" ? menuItem.happyHourPrice : menuItem.price}</span>
        </div>
      </div>

      {itemVariations}
    </li>
  );
};

export default MenuItem;
