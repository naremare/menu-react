import React, { useState } from 'react';
import { data } from '../assets/data.js';
import './Menu.media.css';

const Menu = () => {
  const firstKey = Object.keys(data)[0]
  const [item, setItem] = useState(data[firstKey])
  
  return (
    <div className="menu">
      <h1 className="menu-title">Ресторан "Нелли"</h1>
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
                  <span>{i.name}</span>
                  <span className="description">{i.description}</span>
                </div>
                <div className="columns">
                  <span>{i.serving}</span>
                  <span>{i.price} ₽</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Menu
