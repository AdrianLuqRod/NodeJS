import { platform, version, arch, cpus, freemem, totalmem, uptime } from 'node:os'; //. <--- ECMAScript Module
// const os = require("node:os"); //. <--- CommonJS Module

console.log("Informacio del sistema operativo:");
console.log("----------------------------------");
console.log("Nombre del sistema operativo: ", platform());
console.log("Version del sistema operativo: ", version());
console.log("Arquitectura", arch());
console.log("CPUs", cpus());
console.log("Memoria libre: ", freemem() / 1024 / 1024);
console.log("Memoria total: ", totalmem() / 1024 / 1024);
console.log("uptime", uptime() / 60 / 60);

