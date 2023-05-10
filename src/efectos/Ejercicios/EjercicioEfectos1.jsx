import React, { useState, useEffect } from "react";

//Crea un componente que muestre un contador.
// Utiliza el hook useEffect para cambiar el título de la página cada vez que el contador cambie.
// El titulo de la página debe ser "Contador: <valor del contador>".


const EjercicioEfectos1 = () => {

  const [contador, setContador] = useState(0);  
 
  const changeTitlePage = (valor) => {
    document.title = "Contador: " + valor;
  };


  useEffect(() => {
    if(contador === 0) return;
    changeTitlePage(contador);
    console.log("Actualizacion");
  }, [contador]);

  return (
    <div>
      <h3>{contador}</h3>
      <button onClick={()=>setContador(contador + 1)}>+</button>
      <button onClick={()=> setContador(contador - 1)}>-</button>
    </div>
  );
};

export default EjercicioEfectos1;
