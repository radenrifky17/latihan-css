const prompt = require("prompt-sync")({ sigint: true })
let sisi = Number(prompt('Masukan panjang sisi kubus: '))

let volume = sisi * sisi * sisi
let luasPermukaan = 6 * sisi * sisi

console.log("========================")
console.log("         HASIL          ")
console.log("------------------------")
console.log('Sisi           : ' + sisi + ' cm')
console.log('Volume         : ' + volume.toFixed(2) + ' cm³')
console.log('Luas Permukaan : ' + luasPermukaan.toFixed(2) + ' cm²')