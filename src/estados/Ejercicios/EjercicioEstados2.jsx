import React, { useState } from "react";

/* 

    El componente EjercicioEstados2 debe mostrar un numero y tres botones:

    - Sumar
    - Restar
    - Resetear

    Al hacer click en los botones, el numero debe cambiar segun corresponda.

    El numero inicial debe ser 0.

*/

const EjercicioEstados2 = () => {
  let valorInicial = 0;
  const [value, setValue] = useState(valorInicial);


  const sumar = () => setValue(value+1);
  const restar = () => setValue(value-1);
  const resetear = () => setValue(valorInicial);

  return (
    <div>
      <h1>{value}</h1>
      <button onClick={sumar}>Sumar</button>
      <button onClick={restar}>Restar</button>
      <button onClick={resetear}>Resetear</button>
    </div>
  );
};

export default EjercicioEstados2;
