import "./Header.scss";
import MainMenu from "../MainMenu/MainMenu";
import logo from "../../assets/Logo.png"
//import { FaListUl } from "react-icons/fa";

function Header() {
  return (
    <header className="header">
      <div className="header__brand">
        <img src={logo} alt="MC logo" className="header__logo" />
        <h1 className="header__title">Career Tracker</h1>
      </div>

      <MainMenu />
    </header>
  );
}

export default Header;