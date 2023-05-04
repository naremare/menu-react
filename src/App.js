import "./App.css";
import Menu from "./components/Menu/Menu";
import NavBar from "./components/NavBar/NavBar";
import image from "./assets/images/IMG_8303.WEBP";
import { Route, Routes } from "react-router-dom";
import Gallery from "./components/Gallery/Gallery";
import Booking from "./components/Booking/Booking";
import Home from "./components/Home/Home";

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
          <div>
            <NavBar />
            <Routes>
              <Route exact path="/home" element={<Home />} />
              <Route path="/menu-react" element={<Menu />} />
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
