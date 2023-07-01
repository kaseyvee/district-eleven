import MenuItem from "./MenuItem";

interface IProps {
  menuItems: {
    soldOut: boolean;
    category: {
      english: string;
      vietnamese: string;
    };
    name: string;
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
  }[];
  menuType: string;
}

const MenuSection: React.FC<IProps> = ({ menuItems, menuType }) => {
  const categoryEnglish = menuItems[0].category.english;
  const categoryVietnamese = menuItems[0].category.vietnamese;

  const menuList = menuItems.map((menuItem) => {
    return (
      <MenuItem
        key={menuItem.name + categoryEnglish}
        menuType={menuType}
        menuItem={menuItem}
      />
    );
  });

  return (
    <section className="menu-section" id={categoryEnglish.toLowerCase()}>
      <div className="wrapper">
        <header className="menu-section_header">
          <h2>{categoryEnglish}</h2>
          <span>{categoryVietnamese}</span>
        </header>
        <ul className="menu-section_menu-items">{menuList}</ul>
      </div>
    </section>
  );
};

export default MenuSection;
