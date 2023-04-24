import React from 'react'
import Maps from '../Maps/Map'
import './Booking.css'

const Booking = () => {
  return (
    <div className="booking">
      <div className="contacts">
        <h1>Наши контакты</h1><br />
        <address>ул. Ленина, 9Б, г. Алушта</address><br />
        <p>Мы открыты:</p>
        <p>11:00 - 23:00</p><br />
        <p>Забронируйте столик по номеру: 
        <br /><a href="tel:79785548181">+7 (978) 554-81-81</a></p>
      </div>
      <div className="map-wrapper">
        <Maps />
      </div>
    </div>
  );
}

export default Booking