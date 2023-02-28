
//Tradicional
function numeroMasCercanoACero(numeros) {
    let numeroMasCercano = numeros[0];
  
    for (let i = 1; i < numeros.length; i++) {
      const numeroActual = numeros[i];
      const distanciaNumeroActual = Math.abs(numeroActual);
  
      if (distanciaNumeroActual < Math.abs(numeroMasCercano)) {
        numeroMasCercano = numeroActual;
      }
    }
  
    return numeroMasCercano;
  }
  
  const numeros = [-10, 8, -2, 6, -4, -7, 5, 3, -1, 9, 7, -6, -8, 2, 1, 0, 4, -3, -5, 10];
  const numeroMasCercano = numeroMasCercanoACero(numeros);
  console.log(`El número más cercano a cero es ${numeroMasCercano}.`);
  
  //Flecha
  const numeroMasCercanoACerof = (numerosf) => {
    let numeroMasCercanof = numerosf[0];
  
    numerosf.forEachf((numerof) => {
      const distanciaNumeroActualf = Math.abs(numerof);
  
      if (distanciaNumeroActualf < Math.abs(numeroMasCercanof)) {
        numeroMasCercanof = numerof;
      }
    });
  
    return numeroMasCercanof;
  };
  

  const numerosf = [-10, 8, -2, 6, -4, -7, 5, 3, -1, 9, 7, -6, -8, 2, 1, 0, 4, -3, -5, 10];
  const numeroMasCercanof = numeroMasCercanoACero(numerosf);
  console.log(`El número más cercano a cero es ${numeroMasCercanof}.`);
  