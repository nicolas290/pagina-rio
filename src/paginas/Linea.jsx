import React from "react";
import apoyo from "../../src/assets/Apoyocomunidades.jpg";
import reparacion from "../../src/assets/Reparaciones.png";
import calidad from "../../src/assets/Calidadaguas.jpg";
import desarrollo from "../../src/assets/Desarrollo.jpg";

function Linea() {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Líneas Estratégicas</h1>
      <p className="text-justify">
        Se ha mantenido vigente el Plan Estratégico y los énfasis en las líneas
        de trabajo, priorizadas por los regantes y la Organización. A
        continuación, presentamos el esquema del sistema Longaví, incluyendo las
        distintas comunidades de aguas, los sectores productivos de Longaví,
        Retiro y Parral, puntos donde existen estaciones de telemetría, entre
        otros:
      </p>
      <p className="text-justify">
        En las líneas estratégicas se deben tomar en cuenta las acciones
        externas y asociadas, es por ello que se considera en ésta la relación
        que existe entre agricultura y bienestar humano que está afectado por el
        cambio climático. Es necesario adecuar las prácticas de gestión de agua
        ante escenarios de mayor restricción y demanda creciente.
      </p>
      <p className="text-justify">
        Luego de hacer un análisis en general de la situación, y validando en
        cada temporada con el Directorio, se mantiene la Planificación para el
        ciclo de 2020-2025 con la priorización de las líneas: Apoyo a
        comunidades de aguas, Infraestructura, Tecnología, Calidad de Aguas y
        Desarrollo Hídrico.
      </p>

      {/* Bloque 1 */}
      <div className="row align-items-center my-5">
        <div className="col-md-6">
          <img
            src={apoyo}
            alt="Apoyo a comunidades"
            className="img-fluid rounded shadow"
          />
        </div>
        <div className="col-md-6">
          <h3>Apoyo a Comunidades de Aguas</h3>
          <p className="text-justify">
            La esencia de la JVRL son los regantes. Se trabaja con las 32
            comunidades de aguas que producen 20 mil hectáreas. La
            regularización de los derechos de aprovechamientos de aguas es clave
            para acceder a beneficios de fomento y cumplir con la normativa
            actual. En este proceso se ha acompañado a las comunidades con
            información oportuna.
          </p>
        </div>
      </div>

      {/* Bloque 2 */}
      <div className="row align-items-center flex-md-row-reverse my-5">
        <div className="col-md-6">
          <img
            src={reparacion}
            alt="Reparación de infraestructura"
            className="img-fluid rounded shadow"
          />
        </div>
        <div className="col-md-6">
          <h3>Infraestructura</h3>
          <p className="text-justify">
            Existe apoyo y seguimiento permanente a fondos públicos y privados
            que mejoran la infraestructura en obras de riego, como los que
            entrega CORFO, INDAP o CNR. Estos abarcan desde promoción hasta
            fiscalización independiente por parte de los representantes de
            canales.
          </p>
        </div>
      </div>

      {/* Bloque 3 */}
      <div className="row align-items-center my-5">
        <div className="col-md-6">
          <img
            src={calidad}
            alt="Calidad de aguas"
            className="img-fluid rounded shadow"
          />
        </div>
        <div className="col-md-6">
          <h3>Calidad de Aguas</h3>
          <p className="text-justify">
            Las aguas del Longaví son de gran pureza, ratificado por la Dirección
            General de Aguas. Se calendarizan monitoreos en distintos puntos,
            analizados en el laboratorio interno y compartidos con las
            comunidades para resolver en conjunto cómo mantener o mejorar la
            calidad del recurso.
          </p>
        </div>
      </div>

      {/* Bloque 4 */}
      <div className="row align-items-center flex-md-row-reverse my-5">
        <div className="col-md-6">
          <img
            src={desarrollo}
            alt="Desarrollo hídrico"
            className="img-fluid rounded shadow"
          />
        </div>
        <div className="col-md-6">
          <h3>Desarrollo Hídrico</h3>
          <p className="text-justify">
            Se busca avanzar en el proyecto de Embalse Longaví, con estudios de
            factibilidad y medioambientales en curso. Este proyecto daría
            seguridad de riego a la zona y reduciría la incertidumbre sobre la
            capacidad de riego del sistema en su conjunto.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Linea;
