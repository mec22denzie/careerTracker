import { Link } from "react-router-dom";
import "./MainMenu.scss";

function MainMenu() {
  return (
    <nav className="main-nav">
      <Link className="main-nav__link" to="/">
        Applications
      </Link>

      <Link className="main-nav__link" to="/add">
        Add Application
      </Link>

      <Link className="main-nav__link" to="/help">
        Help
      </Link>
    </nav>
  );
}

export default MainMenu;