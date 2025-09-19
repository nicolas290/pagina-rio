

import miembros from "../miembrosData"  


function Directorio() {
  return (
    <>
      <div className="container mt-4">
        <div className="card bg-dark text-white p-4 rounded">
          <h1 className="text-center">DIRECTORIO 2023-2024</h1>
          <p className="mt-3">
            En la Asamblea General 2023 se ratificó el Directorio de la Junta de Vigilancia del Río Longaví y sus Afluentes,
            la que corresponde realizar cada segundo miércoles de septiembre. Luego de que los representantes de las 32 comunidades
            de aguas, eligieran seguir con los mismos Directores, siendo una aprobación a la gestión que se ha hecho durante las últimas
            temporadas de distribución de aguas. Normalmente, en la Asamblea se detallan las acciones que se realizan durante cada periodo
            para explicar alcances y trabajos, con los representantes de las acciones de aguas del sistema de riego de Longaví, Retiro y Parral.
          </p>
          {/* CORRECCIÓN: También se arregla la ruta de esta imagen. */}
          <img src="/img/Asamblea-1.jpg" alt="Asamblea General" className="img-fluid my-3" />
          <p>
            Los estatutos de la JVRL norma reunirse una vez al año, ocasión en que se presentan los balances, memoria, presupuesto,
            entre otros puntos de relevancia. Además, se realiza la votación de Directores, Revisores de Cuentas y Ministros de fe que
            estarán vigentes durante el nuevo período.
          </p>
          <p>
            Durante la última Asamblea se ratificó el Directorio vigente, compuesto por Máximo Correa, Fernando Soto, Herman Parada,
            Omar Albornoz, Jaime Venegas, Emilio Sarah y Alfonso Rodríguez. Ellos son los que determinan, según información técnica,
            la tasa de distribución, la administración del Embalse Bullileo y el desarrollo de distintos proyectos en general en beneficio de la JVRL.
          </p>
          <p>
            Así mismo, se eligieron Revisores de Cuentas, quedando Nibaldo Corvalán del Canal Retiro y Elizardo Bravo del Canal Robles Nuevos,
            quienes tienen la misión de dar seguridad del cumplimiento de los procedimientos y aprobar el acta de la asamblea.
          </p>
        </div>
      </div>

      {/* La sección de tarjetas ahora renderizará los 6 miembros del array */}
      <div className="container mt-5">
        <h2 className="text-center mb-4">Miembros del Directorio</h2>
        <div className="row justify-content-center">
          
          {/* El código de mapeo sigue siendo el mismo, pero ahora itera sobre 6 elementos */}
          {miembros.map((miembro) => (
            <div key={miembro.nombre} className="col-12 col-md-6 col-lg-4 mb-4 d-flex justify-content-center">
              <div className="card h-100 shadow" style={{ width: "22rem" }}>
                <img
                  src={miembro.imagen}
                  className="card-img-top"
                  alt={miembro.nombre}
                  style={{ objectFit: "cover", height: "400px" }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{miembro.nombre}</h5>
                  <p className="card-text">
                    <strong>{miembro.cargo}</strong> ({miembro.canal})
                  </p>
                  {/* El texto oculto ahora usa la descripción de cada miembro */}
                  {/* Si un miembro no tuviera descripción, el `&&` evita que se renderice un span vacío */}
                  {miembro.descripcion && (
                    <span className="more-text" style={{ display: "none" }}>
                      {miembro.descripcion}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </>
  );
}

export default Directorio;