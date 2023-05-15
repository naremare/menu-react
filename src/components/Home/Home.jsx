import React from "react";
import "./Home.css";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div>
        <h1 className="welcoming">
          Добро пожаловать в ресторан <span className="restaurant-name">"Нелли"</span>
        </h1>
        <blockquote>
        <p className="cursive">"Полный желудок равен хорошему настроению, а пустой — унынию и ссорам."

- Джоан Роулинг</p>
        </blockquote>
        <div className="grid-items">
          <p className="grid-item">
            <NavLink to="/menu" className="link">Меню</NavLink>
          </p>
          <p className="grid-item">
            <NavLink to="/booking" className="link">Забронировать столик</NavLink>
          </p>
        </div>
      </div>
    </div>
  );};

export default Home
