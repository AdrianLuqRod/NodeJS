import { readFileSync, readFile } from 'fs';

console.log('Leyendo el primer archivo ...');
readFile('./archivo.txt', 'utf-8', (err, text) => {
    console.log(text);
});

console.log('Hacer cosas mientras se lee el archivo ...');

console.log('Leyendo el segundo archivo ...');
readFile('./archivo2.txt', 'utf-8', (err, text) => {
    console.log(text);
});

