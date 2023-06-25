import React from "react";
import Logo from "../images/logo-footer.png";

function Footer() {
  return (
    <footer>
      <img src={Logo} alt="Logo Kasa" />
      <span>© 2020 Kasa. All rights reserved</span>
    </footer>
  );
}

export default Footer;
