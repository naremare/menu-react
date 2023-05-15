import { useState } from "react";
import { NavLink } from "react-router-dom";

import "./App.css";
import Menu from "./components/Menu/Menu";
import NavBar from "./components/NavBar/NavBar";
import { Route, Routes } from "react-router-dom";
import Gallery from "./components/Gallery/Gallery";
import Booking from "./components/Booking/Booking";
import Home from "./components/Home/Home";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="App">
      <div className="bg-color">
      {
        isOpen && (
          <div className="burger-links">
            <NavLink to="/menu-react" onClick={toggleMenu}>Главная</NavLink>
            <NavLink to="/menu" onClick={toggleMenu}>Меню</NavLink>
            <NavLink to="/gallery" onClick={toggleMenu}>Галерея</NavLink>
            <NavLink to="/booking" onClick={toggleMenu}>Бронирование</NavLink>
          </div>
        )
      }
        <div className="menu">
          <div>
            <NavBar toggleMenu={toggleMenu} isOpen={isOpen} />
            <Routes>
              <Route exact path="/menu-react" element={<Home />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/booking" element={<Booking />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
