import ReactMarkdown from "react-markdown";

import HeroButton from "./HeroButton";
import Logo from "../assets/logo.svg";

function Footer({ data }: any) {
  const generalInfo = data.generalInfo;

  function formatPhoneNumber(phoneNumber: string) {
    let numberArr = phoneNumber.split("");
    numberArr.splice(3, 0, ".");
    numberArr.splice(7, 0, ".");

    return numberArr.join("");
  }

  function formatAccessiblePhoneNumber(phoneNumber: string) {
    const spacedNumber = phoneNumber.split("").join(" ");

    // Insert a dot after every third digit
    const formattedPhoneNumber = spacedNumber.replace(/(\d{3})(?=\d)/g, "$1.");

    return formattedPhoneNumber;
  }

  return (
    <footer className="footer" id="footer">
      <div className="wrapper">
        <div className="footer_top">
          <div className="footer_top_info">
            <div className="footer_top_info_item">
              <header className="footer_top_info_item_header">HOURS</header>
              <ReactMarkdown
                children={generalInfo.hours}
                className="footer_top_info_item_content"
              />
            </div>
            <div className="footer_top_info_item">
              <header className="footer_top_info_item_header">LOCATION</header>
              <div className="footer_top_info_item_content">
                <p>{generalInfo.address}</p>
              </div>
            </div>
            <div className="footer_top_info_item">
              <header className="footer_top_info_item_header">CONTACT</header>
              <div className="footer_top_info_item_content">
                <a href="tel:6045662021" aria-label={formatAccessiblePhoneNumber(generalInfo.phoneNumber)}>
                  {formatPhoneNumber(generalInfo.phoneNumber)}
                </a>
                <a href={`mailto: ${generalInfo.email}`}>{generalInfo.email}</a>
              </div>
            </div>
          </div>

          <img
            src="https://api.mapbox.com/styles/v1/mapbox/dark-v10/static/pin-s+d3af37(-123.10140314000238,49.249254171474)/-123.1015,49.2493,12.98,0/1000x1000@2x?access_token=pk.eyJ1Ijoia2FzZXl2ZWUiLCJhIjoiY2xmdWRhdDR4MDF3MzNobzgyMnRjMmtsMyJ9.fKYQPJBIZ_aO7UNqll1q4A"
            alt=""
            className="footer_top_map"
          />
        </div>

        <div className="footer_bottom">
          <div>© 2021 District Eleven</div>
          <Logo />
          <div className="footer_bottom_socials">
            <HeroButton
              to={generalInfo.instagram}
              color="yellow"
              children="Instagram"
              className="footer-button"
            />
            <HeroButton
              to={generalInfo.tikTok}
              color="yellow"
              children="Tiktok"
              className="footer-button"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
