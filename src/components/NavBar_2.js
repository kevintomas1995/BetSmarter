import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";


function NavBar_2() {
  const [clicked, setClicked] = useState(false);
  const [navbar, setNavbar] = useState("navbar");
  const clickHandler = () => {
    setClicked((prevState) => !prevState);
  };
  const closeMobileMenu = () => {
    setClicked(false);
  };

  return (
    <div className="navbar__wrapper">
      <nav className={navbar}>
        <div>
          <Link to="/" className="navbar__logo">
            {/* <img src={logo} alt="Logo" /> */}
            <a className="navbar__name2">BetSmart</a>
          </Link>
        </div>

        <div>
          <div className="navbar__menu-icon" onClick={clickHandler}>
            <i style={{color: "black"}} className={clicked ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={clicked ? "nav-menu active" : "nav-menu"}>
            <li className="navbar__item">
              <Link
                to="/"
                className="navbar__nav-links"
                onClick={closeMobileMenu}
              >
                <a className="navbar_item__text2">Home</a>
              </Link>
            </li>
            <li className="navbar__item">
              <Link
                to="/quoten"
                className="navbar__nav-links"
                onClick={closeMobileMenu}
              >
                <a className="navbar_item__text2">Beste Quoten</a>
              </Link>
            </li>
            <li className="navbar__item">
              <Link
                to="/warumBetSmart"
                className="navbar__nav-links"
                onClick={closeMobileMenu}
              >
                <a className="navbar_item__text2">Warum BetSmart?</a>
              </Link>
            </li>
            <li className="navbar__item">
              <Link
                to="/anleitungen"
                className="navbar__nav-links"
                onClick={closeMobileMenu}
              >
                <a className="navbar_item__text2">Anleitungen</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar_2;
