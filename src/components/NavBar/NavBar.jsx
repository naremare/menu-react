import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="nav">
            <NavLink to="/menu-react">Меню</NavLink>
            <NavLink to="/gallery">Галлерея</NavLink>
            <NavLink to="/booking">Бронирование</NavLink>
        </div>
    )
}

export default NavBar;

