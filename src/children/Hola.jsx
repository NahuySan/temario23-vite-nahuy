import React from "react";
import Nombre from "./Nombre";

const Hola = (props) => {
  return (
    <div>
      <h1>hola</h1>
      {props.children}
    </div>
  );
};

export default Hola;
