import React, { useEffect, useState } from "react";
import logoFA from "./images/logoFA.png";
import Navigation from "./navigation";

const NavLogo = () => {
  const [isNavVisible, setNavVisible] = useState(false);

  const scrollToElement = (elementSelector, instance = 0) => {
    const elements = document.querySelectorAll(elementSelector);
    if (elements.length > instance) {
      elements[instance].scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleNavClick = (elementSelector, instance) => {
      scrollToElement(elementSelector, instance);
      setNavVisible(false);
    };

    document.getElementById("linkJobDone").addEventListener("click", () => {
      handleNavClick(".header");
    });

    document.getElementById("linkSkils").addEventListener("click", () => {
      handleNavClick(".header", 1);
    });

    document.getElementById("linkAbout").addEventListener("click", () => {
      handleNavClick(".column");
    });

    document.getElementById("linkGetInTouch").addEventListener("click", () => {
      handleNavClick(".header", 2);
    });
  }, []);

  return (
    <div>
      <nav>
        <div className="nav-logo">
          <a href="https://github.com/filippialb" target="_blank">
            <img src={logoFA} alt="Logo"></img>
          </a>
        </div>
        <Navigation isNavVisible={isNavVisible} setNavVisible={setNavVisible} />
        <ul className={`nav-links primary-navigation ${isNavVisible ? "visible" : ""}`}>
          <li className="link active"><a href="#">Home</a></li>
          <li id="linkJobDone" className="link"><a href="#">Job Done</a></li>
          <li id="linkSkils" className="link"><a href="#">Skills</a></li>
          <li id="linkGetInTouch" className="link"><a href="#">Get In Touch</a></li>
          <li id="linkAbout" className="link"><a href="#">About</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default NavLogo;
