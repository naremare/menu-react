import React, { useState } from "react";
import "./Burger-menu.media.css"

const BurgerMenu = (props) => {

  return (
    <div className="burger-menu">
      <button className="burger-icon" onClick={props.toggleMenu}>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </button>
    </div>
  );
};

export default BurgerMenu;
