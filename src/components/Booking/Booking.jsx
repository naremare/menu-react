import React from 'react'
import Maps from '../Maps/Map'
import './Booking.css'

const Booking = () => {
  return (
    <div className="booking">
      <div className="contacts">
        <h2 className="contacts-titles">Наши контакты</h2>
        <br />
        <address>ул. Ленина, 9Б, г. Алушта</address>
        <br />
        <p>Мы открыты:</p>
        <p>11:00 - 23:00</p>
        <br />
        <p>
          Забронируйте столик по номеру:
          <br />
          <a href="tel:79785548181">+7 (978) 554-81-81</a><br />
          <a className='links' href="https://vk.com/nelli_rest" target="_blank" class="fa fa-vk" title="VK"></a>
          <a className='links' target="_blank" href="https://yandex.ru/maps/org/nelli/64754695744/?ll=34.413165%2C44.669674&z=15" title="Yandex">
          Яндекс
          </a>
        </p>
      </div>
      <div className="map-wrapper">
        <Maps />
      </div>
      <div className="hotel">
        <p>Интересует проживание в гостинице? Приглашаем вас в нашу гостиницу <a href='https://alushta-king.com/' target={'_blank'} className="king">"Кинг"</a>(подробрости в ссылке)</p>
        <p>Для гостей нашей гостиницы действует скидка 10% в ресторане "Нелли"</p>
        </div>
    </div>
  );
}

export default Booking