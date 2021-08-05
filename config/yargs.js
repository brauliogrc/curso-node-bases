// Manejo de envio de argumentos al comando "npm app"
const argV = require('yargs')
                .options({
                    'b':{ // Abrebiacion del comando
                        alias: 'base', // Alias o nombre completo de comando
                        type: 'number', // Tiipo de dato que será pasado, en este caso es el comando u un valor numerico
                        demandOption: true, // Argumento requerido, manda error si el argumento no es pasado con su dato
                        describe: 'Es la base de la tabla de multiplicar'
                    },
                    'h':{
                        alias: 'hasta',
                        type: 'number',
                        default: 10,
                        // demandOption: false
                        describe: 'Multiplica la base hasta el numero dado'
                    },
                    'l':{
                        alias: 'listar',
                        type: 'boolean',
                        default: false,
                        // demandOption: false
                        describe: 'Muestra la tabla en consola'
                    },
                })
                .check( (argv, options) => {
                    if ( isNaN(argv.b) ){ // Verificamos que el argumento reciba los valores validos, en este caso constrolamos el ingreso de caracteres y enviamos un error
                        throw 'La base tiene que ser un numero'
                    }
                    return true // Si no existe ningun error despues de las verificaciones, entonces debemos retornar un "true"
                })
                .argv
            
module.exports = argV;