import React from "react";
import instagram from "../assets/instagram.png"
function Footer() {
  return (
    <footer>
      <div>
        <span>Síguenos en redes sociales</span>
        <a href="https://www.instagram.com/jvrlongavi/?hl=es" target="_blank">
          <img src={instagram} alt="Instagram"></img>

        </a>
        <p>
          Dieciocho 560 Parral FONO: 73-2462676 1 norte # 386 Longavi Fono: 732
          411 331 Campamento Bullileo Fono: +569 6687 0018
          secretaria@juntariolongavi.cl
        </p>
      </div>
     
    </footer>
  );
}

export default Footer;
