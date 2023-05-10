import React, { useState } from "react";
import Descripcion from "./Descripcion";

const Card = ({titulo, children}) => {
const [mostrarDescripcion, setMostrarDescripcion] = useState(false);

const toggleDescripcion = () => {
  setMostrarDescripcion(!mostrarDescripcion); 
}

  return (
    <div className="card">
      <h1>{titulo}</h1>
      {mostrarDescripcion && children}
      <button onClick={toggleDescripcion}>
        {mostrarDescripcion? 'Ocultar':'Mostrar'}
      </button>
    </div>
  );
};

export default Card;
