import HeroButton from "../HeroButton";

interface IProps {
  title: string;
  menuType: string;
}

const PageHeader: React.FC<IProps> = ({ title, menuType }: IProps) => {
  const renderHeroButton = (to: string, children: string) => {
    return (
      <HeroButton
        to={to}
        color="white"
        children={children}
        className="page-header-button"
      />
    );
  };

  return (
    <div className="page-header">
      <div className="page-header_heading">
        <h1 className="page-header_heading_title">{title}</h1>
        {menuType === "happyHour" && (
          <span className="page-header_heading_blurb">
            served from 5pm to 7pm
          </span>
        )}
      </div>
      <div className="page-header_buttons">
        {title !== "HAPPY HOUR MENU" &&
          renderHeroButton("/happy-hour", "HAPPY HOUR MENU")}
        {title !== "TAKE-OUT MENU" &&
          renderHeroButton("/take-out", "TAKE-OUT MENU")}
        {title !== "ALL DAY MENU" && renderHeroButton("/menu", "ALL DAY MENU")}
      </div>
    </div>
  );
};

export default PageHeader;
