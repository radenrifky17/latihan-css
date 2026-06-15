const prompt = require("prompt-sync")({ sigint: true })
let pAlas = Number(prompt('Masukan panjang alas: '))
let lAlas = Number(prompt('Masukan lebar alas: '))
let tLimas = Number(prompt('Masukan tinggi limas: '))
let tSegitiga = Number(prompt('Masukan tinggi sisi tegak: '))

let luasAlas = pAlas * lAlas
let volume = (1/3) * luasAlas * tLimas
let luasSelimut = 2 * (0.5 * pAlas * tSegitiga) + 2 * (0.5 * lAlas * tSegitiga)
let luasPermukaan = luasAlas + luasSelimut

console.log("========================")
console.log("         HASIL          ")
console.log("------------------------")
console.log('Volume         : ' + volume.toFixed(2) + ' cm³')
console.log('Luas Permukaan : ' + luasPermukaan.toFixed(2) + ' cm²')