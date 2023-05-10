import React from "react";
import styles from "./estilos/Estilos.module.css"
import GameView from "./piedra-papel-tijera/GameView";
import EjercicioEfectos1 from "./efectos/Ejercicios/EjercicioEfectos1";
import Efectos from "./efectos/Efectos";
import EjercicioEfectos2 from "./efectos/Ejercicios/EjercicioEfectos2";
import ObtenerUsuarioPorId from "./mapFilterFind/pruebas";
import ObetenerUsuarioPorApellido from "./mapFilterFind/pruebas";
import CrearUsuario from "./mapFilterFind/pruebas";
import Card from "./children/Ejercicio/Card";
import Descripcion from "./children/Ejercicio/Descripcion";
import Nombre from "./children/Nombre";
import Nasa from "./Promesas/Nasa";
import ListaDeTareas from "./toDoList/To-Do";
import ToDo from "./toDoList/view/ToDo";
const App = () => {
  return (
    // <div className={styles.contenedor}>
    //   <Card titulo="Mi Tarjeta">
    //     <Nombre name="Juan"></Nombre>
    //     {/* <Descripcion texto="Esta es la descripcion"/> */}
    //     <Nasa></Nasa>
    //   </Card> 
    // </div>
    <div> 
      <ToDo></ToDo>
    </div>
  );
};

export default App;
