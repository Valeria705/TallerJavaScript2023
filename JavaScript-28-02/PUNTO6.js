//Tradicional
function clasificarEdadesYContarRepeticiones(edades, codigos) {
    let edadMayor = edades[0];
    let repeticionesEdadMayor = 1;
  
    edades.forEach((edad, index) => {
      if (edad > edadMayor) {
        edadMayor = edad;
        repeticionesEdadMayor = 1;
      } else if (edad === edadMayor && index !== 0) {
        repeticionesEdadMayor++;
      }
    });
  
    return {
      edadMayor,
      repeticionesEdadMayor
    };
  }
  

  let edades = [23, 19, 20, 25, 23, 27, 21, 22, 26, 24, 19, 20, 25, 23, 27, 21, 22, 26, 24, 25];
  let codigos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  let { edadMayor, repeticionesEdadMayor } = clasificarEdadesYContarRepeticiones(edades, codigos);
  console.log(`La edad mayor es ${edadMayor} y se repite ${repeticionesEdadMayor} veces.`);
  
  //Flecha
  let clasificarEdadesYContarRepeticionesf = (edadesf, codigosf) => {
    let edadMayorf = edadesf[0];
    let repeticionesEdadMayorf = 1;
  
    edades.forEach((edadf, indexf) => {
      if (edadf > edadMayorf) {
        edadMayorf = edadf;
        repeticionesEdadMayorf = 1;
      } else if (edadf === edadMayorf && indexf !== 0) {
        repeticionesEdadMayorf++;
      }
    });
  
    return {
      edadMayorf,
      repeticionesEdadMayorf
    };
  };
  
  let edadesf = [23, 19, 20, 25, 23, 27, 21, 22, 26, 24, 19, 20, 25, 23, 27, 21, 22, 26, 24, 25];
  let codigosf = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  let { edadMayorf, repeticionesEdadMayorf } = clasificarEdadesYContarRepeticionesf(edadesf, codigosf);
  console.log(`La edad mayor es ${edadMayorf} y se repite ${repeticionesEdadMayorf} veces.`);
  