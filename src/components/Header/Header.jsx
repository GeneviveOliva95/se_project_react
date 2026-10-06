import "./Header.css";
import headerLogo from "../../assets/logo.svg";
import headerAvatar from "../../assets/avatar.svg";

function Header({ onAddClick, weatherData }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <img className="header__logo" src={headerLogo} alt="WTWR logo" />
      <p className="header__date-and-location header__text-styles">
        {currentDate}, {weatherData.city}
      </p>
      <button
        className="header__add-clothes-button header__text-styles"
        type="button"
        onClick={onAddClick}
      >
        + Add clothes
      </button>
      <div className="header__user-container">
        <p className="header__username header__text-styles">Genevive Castro</p>
        {/* TODO - Make alt value match current user in future iteration */}
        <img
          className="header__avatar"
          src={headerAvatar}
          alt="Genevive Castro"
        />
      </div>
    </header>
  );
}

export default Header;
