import foto1 from "./assets/foto1.jpeg";
import foto2 from "./assets/foto2.jpeg";
import foto3 from "./assets/foto3.jpeg";
import foto4 from "./assets/foto4.jpeg";
import foto5 from "./assets/foto5.jpeg";
import foto6 from "./assets/foto6.jpeg";   

 const miembros = [
  {
    nombre: "Elizardo Bravo",
    cargo: "Revisor de Cuentas",
    canal: "Canal Robles Nuevos",
    // CORRECCIÓN: Se agrega una barra inclinada (/) al inicio para que la ruta sea absoluta desde la carpeta 'public'.
    imagen: `${foto1}`,
    descripcion: "Encargado de la supervisión y cumplimiento de los procedimientos."
  },
  {
    nombre: "Nibaldo Corvalán",
    cargo: "Revisor de Cuentas",
    canal: "Canal Retiro",
    // CORRECCIÓN: Se agrega una barra inclinada (/) al inicio.
    imagen:  `${foto2}`,
    descripcion: "Tiene la misión de dar seguridad y aprobar el acta de la asamblea."
  },
  {
    nombre: "Máximo Correa",
    cargo: "Director",
    canal: "Representante General",
    // CORRECIÓN: Se agrega una barra inclinada (/) al inicio.
    imagen: `${foto3}`,
    descripcion: "Lidera la gestión y dirección estratégica de la junta de vigilancia."
  },
  {
    nombre: "Fernando Soto",
    cargo: "Director",
    canal: "Sector Parral",
    // CORRECCIÓN: Se agrega una barra inclinada (/) al inicio.
    imagen: `${foto4}`,
    descripcion: "Supervisa la distribución y los proyectos en el área de Parral."
  },
  {
    nombre: "Herman Parada",
    cargo: "Director",
    canal: "Sector Longaví",
    // CORRECCIÓN: Se agrega una barra inclinada (/) al inicio.
    imagen: `${foto5}`,
    descripcion: "Coordina las operaciones y el mantenimiento en Longaví."
  },
  {
    nombre: "Jaime Venegas",
    cargo: "Director",
    canal: "Sector Retiro",
   
    imagen: `${foto6}`,
    descripcion: "Responsable de la comunicación con los regantes de Retiro."
  }



];


export default miembros;