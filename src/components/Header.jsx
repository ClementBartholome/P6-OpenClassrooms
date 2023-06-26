import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../images/logo.png";

function Header() {
  return (
    <header>
      <div>
        <NavLink to="/P6-OpenClassrooms">
          <img src={Logo} alt="Logo Kasa" />
        </NavLink>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="/P6-OpenClassrooms">Accueil</NavLink>
          </li>
          <li>
            <NavLink to="/about">A Propos</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
