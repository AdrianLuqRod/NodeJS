import { statSync } from 'fs';
const stats = statSync("./archivo.txt");
console.log(
    stats.isFile(), // si es un fichero
    stats.isDirectory(), // si es un directorio
    stats.isSymbolicLink(), // si es un enlace simbolico
    stats.size, // tamaño del archivo en bytes.
);

