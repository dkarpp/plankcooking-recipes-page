import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export const Header = () => {
  const [toggle, setToggle] = React.useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("scrollspy");
      const activeElement = document.getElementById("scrollspy-link");
      const distanceToTop = element.getBoundingClientRect().top;

      if (distanceToTop > 0 && !toggle) {
        setToggle(true);
        activeElement.classList.remove("active");
      } else if (distanceToTop <= 0 && toggle) {
        setToggle(false);
        activeElement.classList.add("active");
      }
    };

    window.addEventListener("scroll", handleScroll);

    window.addEventListener("resize", handleScroll, true);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll, true);
    };
  }, [toggle]);

  return (
    <>
      <div className="d-none d-md-flex ml-5 justify-content-center top-container">
        <Link className="header-logo-link" to="/">
          <img id="header-logo" src="/PlankLogo.png" alt="Logo Icon" />
        </Link>
        <Link className="align-self-end" to="/Cart">
          <img id="header-cart" src="/PlankCart.png" alt="Cart Icon" />
        </Link>
      </div>

      <div id="scrollspy"></div>

      <header id="header" className="header sticky-top w-100">
        <nav className="navbar navbar-expand-md navbar-dark w-100">
          <div id="navContent" className="container-md">
            <a
              id="scrollspy-link"
              className="nav-link ignore-link"
              href="#"
            ></a>

            <div id="navAnimationGroup" className="ml-0 mr-auto">
              <Link id="logoNavButton" className="navbar-brand" to="/">
                <img
                  className="img-fluid"
                  src="/PlankLogo.png"
                  alt="Logo Icon"
                />
              </Link>
              <Link id="cartNavButton" className="navbar-brand" to="/cart">
                <img
                  className="img-fluid"
                  src="/PlankCart.png"
                  alt="Cart Icon"
                />
              </Link>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbar"
              aria-controls="navbar"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="line"></span>
              <span className="line"></span>
              <span className="line"></span>
            </button>

            <div className="collapse navbar-collapse drop-down" id="navbar">
              <ul className="nav navbar-nav mx-auto pt-2 pb-2 pt-md-0 pb-md-0">
                <li className="nav-item">
                  <Link className="nav-link" to="/About">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Shop">
                    Shop
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Reviews">
                    Reviews
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Recipes">
                    Recipes
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};
