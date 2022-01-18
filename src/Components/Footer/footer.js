import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./footer.scss";
import theme from "../../Store/theme";

const Footer = () => {
  const currentLocation = useLocation();
  const currentPath = currentLocation.pathname;

  const styles = theme(currentPath);
  const { background } = styles;

  const backgroundStyle = {
    backgroundColor: `${background}`,
  };

  const today = new Date();
  const year = today.getFullYear();
  return (
    <div className="footer" style={backgroundStyle}>
      <div>
        <a href="mailto:everythingaboutfootball3012@gmail.com">Write to us</a>
        <Link to="/privacy-policy">Privacy Policy</Link>
        <Link to="/terms-of-use">Terms of Use</Link>
        <Link to="/disclaimer">Disclaimer</Link>
      </div>
      <hr></hr>
      <small>Copyright © Everything about Football {year}</small>
    </div>
  );
};

export default Footer;
