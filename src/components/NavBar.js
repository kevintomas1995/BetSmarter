import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import "@fontsource/dm-sans";
import { AiOutlineInstagram } from "react-icons/ai";

function NavBar(props) {
  const [clicked, setClicked] = useState(false);
  const [navbar, setNavbar] = useState("navbar");

  const clickHandler = () => {
    setClicked((prevState) => !prevState);
  };
  const closeMobileMenu = () => {
    setClicked(false);
  };

  function handleHomeClick() {
    props.homeRef.current.scrollIntoView({ behavior: "smooth" });
  }

  function handleStatsClick() {
    props.statsRef.current.scrollIntoView({ block: "end", behavior: "smooth" });
  }

  function handleWhyClick() {
    props.whyRef.current.scrollIntoView({ block: "end", behavior: "smooth" });
  }

  function handleTutClick() {
    props.tutRef.current.scrollIntoView({ block: "start", behavior: "smooth" });
  }

  function handleContactClick() {
    props.contactRef.current.scrollIntoView({
      block: "start",
      behavior: "smooth",
    });
  }

  return (
    <div className="navbar__wrapper">
      <nav className={navbar}>
        <div onClick={handleHomeClick} className="navbar__logo">
          <Link to="/" className="navbar__logo">
            {/* <img src={logo} alt="Logo" /> */}
            <a className="navbar__name">BetSmart</a>
            {/* <i class="fab fa-btc"></i> */}
          </Link>
        </div>

        <div>
          <div className="navbar__menu-icon__wrapper">
            <div className="navbar__menu-icon" onClick={clickHandler}>
              <i className={clicked ? "fas fa-times" : "fas fa-bars"} />
            </div>
          </div>

          <ul className={clicked ? "nav-menu active" : "nav-menu"}>
            {/* <li className="navbar__item" onClick={handleQuotenClick}>
              <Link
                to="/quoten"
                className="navbar__nav-links"
                onClick={closeMobileMenu}
              >
                <a className="navbar_item__text">Beste Quoten</a>
              </Link>
            </li> */}
            <li className="navbar__item" onClick={handleStatsClick}>
              <Link
                to="/"
                className="navbar__nav-links"
                onClick={closeMobileMenu}
              >
                <a className="navbar_item__text">Statistiken</a>
              </Link>
            </li>
            <li className="navbar__item" onClick={handleWhyClick}>
              <Link
                to="/"
                className="navbar__nav-links"
                onClick={closeMobileMenu}
              >
                <a className="navbar_item__text">Warum BetSmart?</a>
              </Link>
            </li>
            <li className="navbar__item" onClick={handleTutClick}>
              <Link
                to="/"
                className="navbar__nav-links"
                onClick={closeMobileMenu}
              >
                <a className="navbar_item__text">Anleitungen</a>
              </Link>
            </li>

            <li className="navbar__item" onClick={handleContactClick}>
              <Link
                to="/"
                className="navbar__nav-links"
                onClick={closeMobileMenu}
              >
                <a className="navbar_item__text">Kontakt</a>
              </Link>
            </li>

            <li className="navbar__item">
              <Link
                to={{
                  pathname:
                    "https://instagram.com",
                }}
                target="_blank"
                className="navbar__nav-links"
                onClick={closeMobileMenu}
              >
                <a className="navbar_item__text">
                  <AiOutlineInstagram size={32} />
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
