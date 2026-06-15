const prompt = require("prompt-sync")({ sigint: true })
let alas = Number(prompt('Masukan alas segitiga: '))
let tinggi = Number(prompt('Masukan tinggi segitiga: '))

let luas = 0.5 * alas * tinggi

console.log("======================")
console.log("        HASIL         ")
console.log("----------------------")
console.log('Alas segitiga   : ' + alas + ' cm')
console.log('Tinggi segitiga : ' + tinggi + ' cm')
console.log('Luas segitiga   : ' + luas.toFixed(2) + ' cm²')