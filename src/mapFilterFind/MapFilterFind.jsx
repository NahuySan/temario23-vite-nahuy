import React from "react";

const usuarios = [
  {
    id: 1,
    nombre: "Juan",
    apellido: "Perez",
  },
  {
    id: 2,
    nombre: "Maria",
    apellido: "Gomez",
  },
  {
    id: 3,
    nombre: "Pedro",
    apellido: "Gomez",
  },
];

const colores = ["🔴", "🟠", "🟡", "🟢"];

const amarillo = colores.find((color) => {
  return color === "🟡";
}); // DEVUELVE EL PRIMER ELEMENTO QUE CUMPLE LA CONDICION, NO GENERA UN ARRAY

const diferentesDeAmarillo = colores.filter((color) => {
  return color !== "🟡";
}); // DEVUELVE UN ARRAY CON TODOS LOS ELEMENTOS QUE CUMPLEN LA CONDICION

// -----------------------------------------------------

const obtenerAJuan = () => {
  const usuario = usuarios.find((usuario) => {
    return usuario.nombre === "Juan";
  });

  const draft = structuredClone(usuario);
  return draft;

  /* 
    return {
      ...usuario,
    }
  */
};
/* 
const juan = obtenerAJuan();
juan.nombre = "MODIFICADO";

console.table(juan);
console.table(usuarios[0]); */

//------------------------

let estado = [
  {
    id: 1,
    nombre: "Juan",
    apellido: "Perez",
  },
  {
    id: 2,
    nombre: "Maria",
    apellido: "Gomez",
  },
  {
    id: 3,
    nombre: "Pedro",
    apellido: "Gomez",
  },
];

const obetenerUsuarioPorApellido = (apellido) => {
  const usuario = estado.find((usuario) => {
    return usuario.apellido === apellido;
  });

  const draft = structuredClone(usuario);
  return draft;
};

const crearUsuario = () => {
  const nuevoUsuario = estado.push({
    id: 4,
    nombre: 'Nahuel',
    apellido: 'Sanchez'
  });
  const draft = structuredClone(nuevoUsuario)
  return draft;
};
const obtenerUsuarioPorId = (userId) => {
  const usuarioId = estado.find((id)=> {
    return userId === id
  });
  return usuarioId
};
const eliminarUsuarioPorId = (userId) => {
  const deleted = estado.filter(id => id !== userId) 
  return deleted;
};



const actualizarUsuarioPorId = (userId) => {
  const nuevoNombre = 'Marta';
  const nuevoApellido = 'Gutierrez'

  const encontrarUsuarioPorId = estado.find(usuario => usuario.id === userId);

  estado[encontrarUsuarioPorId].nombre = nuevoNombre;
  estado[encontrarUsuarioPorId].apellido = nuevoApellido;  
};

const MapFilterFind = () => {
  return <div>MapFilterFind</div>;
};

export default MapFilterFind;
