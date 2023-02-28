
let crearAlimento = (nombre, tipo, energia) => ({ nombre, tipo, energia });

let alimentos = [
  crearAlimento('Lechuga', 'vegetal', 100),
  crearAlimento('Zanahoria', 'vegetal', 150),
  crearAlimento('Carne', 'animal', 300),
  crearAlimento('Manzana', 'vegetal', 200),
  crearAlimento('Mosquito', 'insecto', 50),

];

// Función primaria que recibe un array de alimentos y una función callback
let obtenerAlimentosVegetales = (alimentos, callback) => {

  setTimeout(() => {
    let alimentosFiltrados = alimentos.filter(alimento => alimento.tipo === 'vegetal' && alimento.energia > 200);
    callback(alimentosFiltrados);
  }, 5000);
};

// Función callback que recibe un array de alimentos y devuelve la sumatoria de niveles de energía de los alimentos vegetales
let sumarNivelesEnergia = alimentos => {
  let sumatoriaEnergia = alimentos.reduce((acumulador, alimento) => acumulador + alimento.energia, 0);
  console.log(`La sumatoria de niveles de energía de los alimentos vegetales es: ${sumatoriaEnergia}`);
};


obtenerAlimentosVegetales(alimentos, sumarNivelesEnergia); // Después de 5 segundos muestra en consola "La sumatoria de niveles de energía de los alimentos vegetales es: 350"
