import "./Navbar.scss";
import GetAppIcon from "@material-ui/icons/GetApp";
import BarChartIcon from "@material-ui/icons/BarChart";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import HomeIcon from '@material-ui/icons/Home';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import Cookies from "universal-cookie";

const cookies = new Cookies();

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
            <HomeIcon />
            <span className="link-text logo-text">Titulo</span>
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
          <a href="/images/user.png" download className="nav-link">
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

//className="theme-icon" id="lightIcon" className="svg-inline--fa fa-moon-stars fa-w-16 fa-7x"
