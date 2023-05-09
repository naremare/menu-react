import React from "react";
import "./Home.css";

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
            <a href="./Menu" className="link">Меню</a>
          </p>
          <p className="flex-item">
            <a href="./Booking" className="link">Забронировать</a>
          </p>
        </div>
      </div>
    </div>
  );};

export default Home
