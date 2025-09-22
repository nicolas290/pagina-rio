import React from "react";
import NoticiaCard from "../Componentes/NoticiaCard";
import  fotogeneral from"../assets/foto-general.png"
import instagram from '../assets/instagram.png';
import noticiasData from "../NoticiasData";


function Noticias() {
  console.log(noticiasData[0])
  return (
    <div className="container  h-auto">
      <header>
        <h1>Noticias | Junta de Vigilancia del Río Longaví</h1>
      </header>

      <div className="container mt-5">
        <h2 className="section-title">Últimas Noticias</h2>
        <div className="h-auto ">

          {noticiasData.map((noticia)=>(
            <NoticiaCard  titulo={noticia.titulo} imagen={noticia.imagen}descripcion={noticia.descripcion}subdescripcion={noticia.subdescripcion}alt={noticia.alt}key={noticia.titulo} />
          ))}

        </div>
      </div>
    </div>
  );
}

export default Noticias;
