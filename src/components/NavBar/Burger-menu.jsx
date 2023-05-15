import "./Burger-menu.media.css"

const BurgerMenu = ({toggleMenu}) => {

  return (
    <div className="burger-menu">
      <button className="burger-icon" onClick={toggleMenu}>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </button>
    </div>
  );
};

export default BurgerMenu;
