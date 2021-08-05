const fs = require('fs');
const colors = require('colors');


const creaArchivo = async(base = 5, listar = false, hasta = 10) => {
    try {
        
        let salida = '',
            archivo = '';
        
        for (let i = 1; i <= hasta; i++){
            salida += `${colors.green(base)} ${'X'.white} ${colors.red(i)} ${'='.green} ${colors.white(base*i)}\n`;
            archivo += `${base} X ${i} = ${base*i}\n`;
        }
        
        if ( listar ) {
            console.log('==================='.rainbow);
            // console.log(`   Tabla del ${base}`);
            console.log('   Tabla del ', colors.blue(base));
            console.log('==================='.rainbow);
            
            console.log(salida);
        }
    
        // Utilizando la libreria FileSystem para la creacion de archivos
        // https://nodejs.org/dist/latest-v14.x/docs/api/fs.html#fs_fs_writefile_file_data_options_callback
    
        // fs.writeFile(`Tabla-${base}.txt`, salida, (err) => {
        //     if ( err ) throw err;
    
        //     console.log(`Tabla-${base}.txt creada`);
        // });
    
        fs.writeFileSync(`./salida/Tabla-${base}.txt`, archivo); // Creacion del archivo

        return `Tabla-${base}.txt`;
        
    } catch (error) {
        throw error; // Dispoaro del reject, control de errores
    }


}

module.exports = {
    creaArchivo,
    // creaArchivo: creaArchivo // Redundante, en estos casos se pasa como la linea anterior
};