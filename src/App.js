import "./App.css";
import Menu from "./components/Menu/Menu";
import NavBar from "./components/NavBar/NavBar";
import image from "./assets/images/IMG_8303.WEBP";
import { Route, Routes } from "react-router-dom";
import Gallery from "./components/Gallery/Gallery";
import Booking from "./components/Booking/Booking";

function App() {
  return (
    <div
      className="App"
      style={{
        height: "100vh",
        height: "100dvh",
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="bg-color">
        <div className="menu">
          {/* <h1 className="menu-title">Ресторан "Нелли"</h1> */}
          <NavBar />
          <Routes>
            <Route exact path='/menu-react' element={<Menu />} />
            <Route path='/gallery' element={<Gallery />} />
            <Route path='/booking' element={<Booking />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
