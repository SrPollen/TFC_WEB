import "./Navbar.scss";
import GetAppIcon from "@material-ui/icons/GetApp";
import BarChartIcon from "@material-ui/icons/BarChart";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import HomeIcon from '@material-ui/icons/Home';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import LogoImage from "../../resources/logo.png";

import Cookies from "universal-cookie";

const cookies = new Cookies();

//Elimina las cookies y vuelve al login
const logOut = () => {
  cookies.remove("id", { path: "/" });
  cookies.remove("username", { path: "/" });
  cookies.remove("email", { path: "/" });
  window.location.href = "./login";
};

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="logo">
          <a href="./" className="nav-link">
            <img alt="logo" src={LogoImage} height="40"/>
            <span className="link-text logo-text">FIREWAVE</span>
          </a>
        </li>

        <li className="nav-item">
          <a href="./" className="nav-link">
            <HomeIcon />
            <span className="link-text">Inicio</span>
          </a>
        </li>

        <li className="nav-item">
          <a href="./account" className="nav-link">
            <AccountBoxIcon />
            <span className="link-text">Perfil</span>
          </a>
        </li>

        <li className="nav-item">
          <a href="./top" className="nav-link">
            <BarChartIcon />
            <span className="link-text">Tops</span>
          </a>
        </li>

        <li className="nav-item">
          <a href="/game/TFC_Game.zip" download className="nav-link">
            <GetAppIcon />
            <span className="link-text">Descarga</span>
          </a>
        </li>

        <li className="nav-item">
          <a href="./" onClick={logOut} className="nav-link">
            <ExitToAppIcon />
            <span className="link-text">Salir</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
