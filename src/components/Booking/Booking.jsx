import React from 'react'
import Maps from '../Maps/Map'
import './Booking.css'

const Booking = () => {
  return (
    <div className="booking">
      <div className="contacts">
        Наши контакты
      </div>
      <div className="map-wrapper">
        <Maps />
      </div>
    </div>
  );
}

export default Booking