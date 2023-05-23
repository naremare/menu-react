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
        <div className="menu">
          <NavBar toggleMenu={toggleMenu} isOpen={isOpen} />
          <div className={isOpen ? "burger-links" : "none"} >
            <NavLink to="/" onClick={toggleMenu}>Главная</NavLink>
            <NavLink to="/menu" onClick={toggleMenu}>Меню</NavLink>
            <NavLink to="/gallery" onClick={toggleMenu}>Галерея</NavLink>
            <NavLink to="/booking" onClick={toggleMenu}>Бронирование</NavLink>
          </div>
          <div className={isOpen ? "components activate" : "components"}>
            <Routes>
              <Route exact path="/" element={<Home />} />
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
