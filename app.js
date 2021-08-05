const { creaArchivo } = require('./helpers/multiplicar');
const argV = require('./config/yargs');
const colors = require('colors');

console.clear();

// Manejando los argumentos enviados desde la consola --base=20
// console.log(process.argv); // Retorna un arreglo, es mas dificil de manejar en caso de que los argumentos se envien en distinto orden
// console.log(argV);

// console.log(argV.base); // Retorna un objeto, por lo tanto podemos acceder a las propiedades más facil

// const [, , arg3 = 'base=5'] = process.argv;
// const [, base = 5] = arg3.split('=');
// console.log(base);



// const base = 3;

creaArchivo(argV.b, argV.l, argV.h)
    .then( nombreArchivo => console.log('El archivo ', nombreArchivo.green, 'ha sido creado'))
    .catch( err => console.log(colors.red(err)));