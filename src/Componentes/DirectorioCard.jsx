import React from 'react'

function DirectorioCard({imagen,nombre,cargo}) {
  return (
    <div>
      <img src={imagen} alt={nombre} />
      <h3>{nombre}</h3>
      <p>{cargo}</p>
    </div>
  )
}

export default DirectorioCard