import React, { useState } from 'react';
import { data } from '../assets/data.js';
// import Items from './Items';

const Menu = () => {
  const firstKey = Object.keys(data)[0]
  const [item, setItem] = useState(data[firstKey])
  
  return (
    <div className="menu">
      <h1 className="menu-title">Ресторан "Нелли"</h1>
      <div className="main">
        <div className="titles" >
          {Object.keys(data).map((category) => (
            <button  key={category} className="menu-subtitle" onClick={(e) => setItem(data[category])}>
              {category}
            </button>
          ))}
        </div>
        <div className="items">
          <ul className="category_item">
            {
              item.map((i) => (
                <li className="title_item">
                  <span>{i.name}</span>
                  <span>{i.price}</span>
                </li>
              ))
            }    
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Menu
