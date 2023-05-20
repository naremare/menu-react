import React, { useState } from "react";
import { data } from "../../assets/data.js";
import "./Menu.media.css";

const Menu = () => {
  const firstKey = Object.keys(data)[0];
  const [item, setItem] = useState(data[firstKey]);

  return (
    <div className="main">
      <div className="titles">
        {Object.keys(data).map((category) => (
          <button
            key={category}
            className="menu-subtitle"
            onClick={(e) => setItem(data[category])}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="items">
        <ul className="category_item">
          {item.map((i) => (
            <li className="title_item">
              <div className="item_name">
                <span className="name">{i.name}</span>
                <span className="description">{i.description}</span>
              </div>
              {i.volume ? (
                <div className="columns">
                  <span>{i.volume.min}</span>
                  <span>{i.volume.max}</span>
                </div>
              ) : (
                <div className="columns">
                  <span>{i.serving ? i.serving : `${i.price.min} ₽`}</span>
                  <span>{i.price.max ? i.price.max : i.price} ₽</span>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
