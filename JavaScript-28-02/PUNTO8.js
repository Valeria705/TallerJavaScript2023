// const planetas = [
//     {nombre: 'Planeta 1', latitud: 10, longitud: 20, oxigeno: 50, agua: 100},
//     {nombre: 'Planeta 2', latitud: -10, longitud: 30, oxigeno: -20, agua: 0},
//     {nombre: 'Planeta 3', latitud: 20, longitud: -10, oxigeno: 80, agua: 200},
//     {nombre: 'Planeta 4', latitud: -30, longitud: 40, oxigeno: 10, agua: 150},
//     {nombre: 'Planeta 5', latitud: 40, longitud: -20, oxigeno: 70, agua: 300},
//     {nombre: 'Planeta 6', latitud: 50, longitud: 60, oxigeno: 40, agua: 50},
//     {nombre: 'Planeta 7', latitud: -20, longitud: 70, oxigeno: 90, agua: 100},
//     {nombre: 'Planeta 8', latitud: 30, longitud: -50, oxigeno: 60, agua: 0},
//     {nombre: 'Planeta 9', latitud: -40, longitud: 80, oxigeno: -30, agua: 50},
//     {nombre: 'Planeta 10', latitud: 60, longitud: -30, oxigeno: 50, agua: 200},
//     {nombre: 'Planeta 11', latitud: 70, longitud: 90, oxigeno: 30, agua: 0},
//     {nombre: 'Planeta 12', latitud: -50, longitud: 100, oxigeno: 20, agua: 100},
//     {nombre: 'Planeta 13', latitud: 80, longitud: -40, oxigeno: 10, agua: 150},
//     {nombre: 'Planeta 14', latitud: -60, longitud: 110, oxigeno: 40, agua: 300},
//     {nombre: 'Planeta 15', latitud: 90, longitud: -50, oxigeno: 80, agua: 50},
//   ];
  
//   // Función para sumar la cantidad total de agua de los 15 planetas
//   function sumarAguaTotal(planetas) {
//     let aguaTotal = 0;
//     for (let planeta of planetas) {
//       aguaTotal += planeta.agua;
//     }
//     return console.log(aguaTotal);
//   }
  
//   // Función para sumar y multiplicar por 100 el total de oxígeno de los 15 planetas
//   function sumarMultiplicarOxigenoTotal(planetas) {
//     let oxigenoTotal = 0;
//     for (let planeta of planetas) {
//       oxigenoTotal += planeta.oxigeno;
//     }
//     return console.log(oxigenoTotal * 100); 
//   }
  
//   // Función para encontrar si alguno de los 15 planetas tiene un nivel de oxígeno negativo y de ser así mostrar la información general de este
//   function encontrarPlanetaConOxigenoNegativo(planetas) {
//     for (let planeta of planetas) {
//       if (planeta.oxigeno < 0) {
//         return console.log(planeta);
//       }
//     }
//     return null;
//}