import { useEffect, useState } from "react";
import HeroButton from "../HeroButton";

interface IProps {
  title: string;
  menuType: string;
}

const PageHeader: React.FC<IProps> = ({ title, menuType }: IProps) => {
  const [isBackgroundAttachmentFixedSupported, setIsBackgroundAttachmentFixedSupported] = useState
  (false);

  useEffect(() => {
    const el = document.createElement('div');
    el.style.backgroundAttachment = 'fixed';

    setIsBackgroundAttachmentFixedSupported(el.style.backgroundAttachment === 'fixed');
  }, []);

  return (
    <div className={`page-header ${isBackgroundAttachmentFixedSupported ? "fixed-background" : ""}`}>
      <div className="page-header_heading">
        <h1 className="page-header_heading_title">{title}</h1>
        {menuType === "happyHour" && <span className="page-header_heading_blurb">served from 5pm to 7pm</span>}
      </div>
      <div className="page-header_buttons">
        {title !== "HAPPY HOUR MENU" && (
          <HeroButton
            to="/happy-hour"
            color="white"
            children="HAPPY HOUR MENU"
            className="page-header-button"
          />
        )}
        {title !== "TAKE-OUT MENU" && (
          <HeroButton
            to="/take-out"
            color="white"
            children="TAKE-OUT MENU"
            className="page-header-button"
          />
        )}
        {title !== "ALL DAY MENU" && (
          <HeroButton
            to="/menu"
            color="white"
            children="ALL DAY MENU"
            className="page-header-button"
          />
        )}
      </div>
    </div>
  );
};

export default PageHeader;
