import "./Burger-menu.media.css"

const BurgerMenu = ({toggleMenu, isOpen}) => {

  return (
    <div className="burger-menu">
      <button type="button" className={isOpen ? "open_btn" : ""} onClick={toggleMenu}>
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 3H45" stroke="currentColor" stroke-width="7" stroke-linecap="round" />
          <path d="M3 24H45" stroke="currentColor" stroke-width="7" stroke-linecap="round" />
          <path d="M3 45H45" stroke="currentColor" stroke-width="7" stroke-linecap="round" />
        </svg>
      </button>
    </div>
  );
};

export default BurgerMenu;
