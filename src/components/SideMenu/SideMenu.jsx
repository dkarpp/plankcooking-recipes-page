import React from "react";
import { Link } from "react-router-dom";

export const SideMenu = ({ headerImage, menuItems }) => {
  return (
    <>
      <div className="d-flex-center align-items-start mb-2 mt-0 mt-lg-2 mr-0 mr-lg-5">
        <div
          id="sideNav"
          className="d-none d-lg-flex flex-column text-center"
          style={{ width: "236px" }}
        >
          <img src={headerImage} alt="Side Menu Image" />
          <div className="d-flex-column-center text-center">
            {menuItems && menuItems.length > 0 && (
              <ul className="m-0 p-0 px-2 w-100">
                <div
                  className="external-link-separator"
                  style={{ margin: "10px 0px 10px 0px" }}
                ></div>
                {menuItems &&
                  menuItems.map((item, index) => (
                    <li key={index}>
                      <Link
                        to={item.path}
                        className="dropdown-item text-wrap font-white p-0 px-1 m-0 text-uppercase"
                      >
                        {item.title}
                        <i
                          className="fa fa-caret-right fa-lg"
                          aria-hidden="true"
                        ></i>
                      </Link>
                      <div
                        className="external-link-separator"
                        style={{ margin: "10px 0px 10px 0px" }}
                      ></div>
                    </li>
                  ))}
              </ul>
            )}
          </div>
        </div>

        <div className="d-lg-none text-center">
          <div id="collapsedSideNav" className="dropdown d-lg-none text-center">
            <button
              id="sideBarButton"
              className="btn font-white w-100"
              type="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span>Recipes</span>
              <br />
            </button>
            <div
              className="dropdown-menu w-100"
              aria-labelledby="dropdownMenuButton"
            >
              <ul>
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      to={item.path}
                      className="dropdown-item text-wrap font-white text-uppercase"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
