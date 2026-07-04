import "./Header.css";
import headerLogo from "../../assets/logo.svg";
import headerAvatar from "../../assets/avatar.svg";

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={headerLogo} alt="WTWR logo" />
      <p className="header__date-and-location">June 15, New York</p>
      <button className="header__add-clothes-button">+ Add clothes</button>
      <div className="header__user-container">
        <p className="header__username">Genevive Castro</p>
        {/* Make alt value match current user */}
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
