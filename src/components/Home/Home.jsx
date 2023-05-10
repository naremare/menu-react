import React from "react";
import "./Home.css";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div>
        <h1>
          Добро пожаловать в ресторан <span className="restaurant-name">"Нелли"</span>
        </h1>
        <p className="cursive">Вкусно есть не запретишь!</p>
        <div className="flex-items">
          <p className="flex-item">
            <NavLink to="/menu-react" className="link">Меню</NavLink>
          </p>
          <p className="flex-item">
            <NavLink to="/booking" className="link">Бронирование</NavLink>
          </p>
        </div>
      </div>
    </div>
  );};

export default Home
