// Función flecha para crear el objeto Padawan con los datos de cada aprendiz
// Función para crear un objeto Padawan con los datos de cada aprendiz
function crearPadawan(nombre, planeta, edad, estatura) {
    return {nombre, planeta, edad, estatura};
  }
  
  // Función que recibe un objeto Padawan y una función callback que clasifica y muestra la actividad asignada al Padawan
  function asignarActividad(padawan, callback) {
    if (padawan.edad < 15) {
      callback(padawan, 'manejo de la fuerza');
    } else {
      callback(padawan, 'manejo del sable de luz');
    }
  }
  
  // Función callback que clasifica y muestra en consola la actividad asignada a cada Padawan
  function mostrarActividad(padawan, actividad) {
    console.log(`${padawan.nombre} de ${padawan.planeta} debe aprender el ${actividad}.`);
  }
  
 
  let padawan1 = crearPadawan('Luke Skywalker', 'Tatooine', 19, 1.75);
  asignarActividad(padawan1, mostrarActividad); 
  let padawan2 = crearPadawan('Ezra Bridger', 'Lothal', 14, 1.6);
  asignarActividad(padawan2, mostrarActividad);
  