import React from "react";
import theme from "../../Store/theme";
import { NavLink, Link } from "react-router-dom";
import "./navbar-style.scss";

const Navbar = (props) => {
  const { location } = props;
  const currentUrl = location.pathname;

  const styles = theme(currentUrl);
  const { background, foreground } = styles;

  const backgroundStyle = {
    backgroundColor: `${background}`,
  };

  const activeStyle = {
    borderBottom: `3px solid ${foreground}`,
    color: `${foreground}`,
  };

  const constantBorder = {
    borderBottom: `3px solid ${background}`,
  };

  return (
    <div className="navbar padding-large" style={backgroundStyle}>
      <Link className="navbar-title" to="/" style={constantBorder}>
        EAF
      </Link>

      <NavLink
        exact
        className="navbar-link"
        to="/"
        style={constantBorder}
        activeStyle={activeStyle}
      >
        Home
      </NavLink>

      {/* <NavLink
        className="navbar-link"
        to="/authentication"
        style={constantBorder}
        activeStyle={activeStyle}
      >
        Sign In
      </NavLink> */}

      <NavLink
        className="navbar-link"
        to="/leagues"
        style={constantBorder}
        activeStyle={activeStyle}
      >
        Leagues
      </NavLink>
    </div>
  );
};

export default Navbar;
