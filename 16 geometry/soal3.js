const prompt = require("prompt-sync")({ sigint: true })
let panjang = Number(prompt('Masukan panjang: '))
let lebar = Number(prompt('Masukan lebar: '))
let luas = panjang * lebar
let keliling = 2 * (panjang + lebar) 

console.log("======================")
console.log("        HASIL         ")
console.log("----------------------")

console.log('Panjang persegi panjang : ' + panjang + ' cm')
console.log('Lebar persegi panjang   : ' + lebar + ' cm')
console.log('Luas persegi panjang    : ' + luas.toFixed(2) + ' cm²')
console.log('Keliling persegi panjang: ' + keliling.toFixed(2) + ' cm')