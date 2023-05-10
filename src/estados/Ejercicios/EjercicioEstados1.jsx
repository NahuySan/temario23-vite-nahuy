import React, { useState } from "react";

/* 
  Crear un componente que muestre un nombre y un boton que diga "cambiar nombre".

  Al hacer click en el boton, el nombre debe cambiar.
*/

const EjercicioEstados1 = () => {
  let nombre = "Otis";
  const [valor, setValor] = useState(nombre);
  // const [valorOriginal] = useState(nombre);

  const cambiarNombre = () => {
    setValor(valor === nombre ? 'Juan' : nombre);
  };

  
//valor === valorOriginal ? setValor('Juan') : setValor(nombre);

//    if (valor === valorOriginal) {
//       setValor('Juan');
//     } else {
//       setValor(nombre);
//     }


  return (
    <div>
      <h1>{valor}</h1>
      <button onClick={cambiarNombre}>Cambiar Nombre</button>
    </div>
  );
};


export default EjercicioEstados1;
