//? Sincrono
//? Sincrono
//? Sincrono
//? Sincrono

import { readFileSync, readFile } from 'fs';

console.log('Leyendo el primer archivo ...');
const text = readFileSync('./archivo.txt', 'utf-8');
console.log('primer texto' + text);

console.log('Hacer cosas mientras se lee el archivo ...');

console.log('Leyendo el segundo archivo ...');
const secondText = readFileSync('./archivo2.txt', 'utf-8');
console.log('segundo texto' + secondText);

