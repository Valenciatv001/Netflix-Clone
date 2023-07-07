import React, { useEffect, useState } from "react";
import "./Nav.css";
function Nav() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  const logo = require("./logo.png");
  const avatar = require("./Netflix-avatar.png");
  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img className="nav_logo" src={logo} alt="Netflix Logo" />
      <img className="nav_avatar" src={avatar} alt="NetFLix Avatar" />
    </div>
  );
}

export default Nav;
