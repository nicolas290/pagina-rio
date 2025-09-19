import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMenu"
          aria-controls="navbarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarMenu">
          <div className="navbar-nav ms-auto mb-2 mb-lg-0">
            <Link className="nav-link active" to={"/"}>
              Inicio
            </Link>
            <Link className="nav-link active" to={"/museo"}>
              Museo
            </Link>
            <Link className="nav-link" to={"/regantes"}>
           regantes
            </Link>
            <Link className="nav-link" to={"/directorio"}>
              Directorio
            </Link>
            <Link className="nav-link" to={"/linea"}>
              Líneas Estratégicas
            </Link>

            <div className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="memoriasDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Memorias
              </a>
              <div className="dropdown-menu" aria-labelledby="memoriasDropdown">
                <a
                  className="dropdown-item"
                  href="./documentos/MEMORIA-JVRL-2021.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  2021
                </a>
                <a
                  className="dropdown-item"
                  href="https://juntariolongavi.cl/wp-content/uploads/2023/09/MEMORIA-ANUAL-JVRL-2022-23-1.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  2022
                </a>
                <a
                  className="dropdown-item"
                  href="https://juntariolongavi.cl/wp-content/uploads/2023/09/MEMORIA-ANUAL-JVRL-2022-23-1.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  2023
                </a>
                <a
                  className="dropdown-item"
                  href="https://juntariolongavi.cl/wp-content/uploads/2024/10/Memoria-anual-JVRL-2024-final-calidad-baja-1.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  2024
                </a>
              </div>
            </div>
   
            <Link className="nav-link" to={"/noticias"}>
              noticias
            </Link>
               <Link className="nav-link" to={"/regantes"}>
              
            </Link>
               <Link className="nav-link" to={"/linea"}>
              linea Estratégicas
            </Link>


            <div className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="empresasDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Empresas Relacionadas
              </a>
              <div className="dropdown-menu" aria-labelledby="empresasDropdown">
                <a
                  className="dropdown-item"
                  href="https://juntariolongavi.cl/sarcom/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Sarcom
                </a>
                <a
                  className="dropdown-item"
                  href="https://juntariolongavi.cl/sarhal-2/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Sarhal
                </a>
            
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
