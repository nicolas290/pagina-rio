import React from 'react';
import patrimonio from '../assets/Dia-del-Patrimonio-2023.jpg';
import maqueta from '../assets/Regantes-observando-la-maqueta-de-la-cuenca-del-Longavi-1024x769.jpg';
import redes from '../assets/rss-museo-1-1024x1024.jpg';
import instagram from '../assets/instagram.png';





function Museo() {
  return (
    <div className="container mt-4">
      <div className="card bg-dark text-white p-4 rounded">
        <h1 className="text-center">Museo del Agua</h1>
        <p className="mt-3">
          La Junta de Vigilancia del Río Longaví y sus Afluentes, está a cargo de la administración de las aguas...
          <br /><br />
          Actualmente, el Museo del Agua Bullileo recibe a visitantes durante el verano (jueves a domingo por la tarde), y en invierno con previa coordinación. La entrada es gratuita.
        </p>

        <div className="row mt-4">
          <div className="col-md-6 col-lg-4 mb-4">
            <div className="card h-100">
              <img src={patrimonio} className="card-img-top" alt="Museo del Agua" />
              <div className="card-body">
                <h5 className="card-title">Día del Patrimonio 2023</h5>
                <p className="card-text">
                  Actividades abiertas a la comunidad permitieron conocer el valor del agua y el entorno natural de Bullileo.
                </p>
                <a href="#" className="btn btn-primary">Ver más</a>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 mb-4">
            <div className="card h-100">
              <img src={maqueta} className="card-img-top" alt="Regantes observando maqueta" />
              <div className="card-body">
                <h5 className="card-title">Regantes observando maqueta de la cuenca</h5>
                <p className="card-text">
                  El Museo conserva, estudia y exhibe la biodiversidad local y la historia constructiva del embalse.
                </p>
                <a href="#" className="btn btn-primary">Ver más</a>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 mb-4">
            <div className="card h-100">
              <img src={redes} className="card-img-top" alt="Redes sociales Museo del Agua" />
              <div className="card-body">
                <h5 className="card-title">Síguenos en redes sociales</h5>
                <p className="card-text">
                  Conéctate con nosotros para conocer más sobre nuestras actividades y exposiciones.
                </p>
                <a
                  href="https://www.instagram.com/museoaguabullileo/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={instagram} alt="Instagram" style={{ width: '30px', height: '30px' }} />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Museo;
