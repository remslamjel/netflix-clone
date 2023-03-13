import React, { useEffect, useState } from "react";
import "./Nav.css";

const Nav = () => {
  const [showNavOnScroll, setShowNavOnScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowNavOnScroll(true);
      } else setShowNavOnScroll(false);
    };

    window.addEventListener("scroll", handleScroll);
    // remove listener before firing another
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`nav ${showNavOnScroll && "nav__showOn__Scroll"}`}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
        alt="Netflix logo"
        className="nav__logo"
      />
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="Netflix avatar"
        className="nav__avatar"
      />
    </div>
  );
};

export default Nav;
