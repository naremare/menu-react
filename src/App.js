import "./App.css";
import Menu from "./components/Menu/Menu";
import NavBar from "./components/NavBar/NavBar";
import image from "./assets/image.WEBP.jpeg";

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
          <Menu />
        </div>
      </div>
    </div>
  );
}

export default App;
