import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <footer className="footer py-4">
        <div className="footer-links-color text-center">
          <Link to="/About">ABOUT</Link> {" | "}
          <Link to="/Shop">SHOP</Link> {" | "}
          <Link to="/Reviews">REVIEWS</Link> {" | "}
          <Link to="/Recipes">RECIPES</Link> {" | "}
          <Link to="/Contact">CONTACT</Link> {" | "}
          <Link to="/Policies">POLICIES</Link>
          <p className="m-0 text-center">
            ©Copyright 2020 Plankcooking.com. All Rights Reserved
          </p>
        </div>
      </footer>
    </>
  );
};
