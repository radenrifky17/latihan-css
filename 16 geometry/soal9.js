const prompt = require("prompt-sync")({ sigint: true })
const PI = 3.14159 

let r = Number(prompt('Masukan jari-jari lingkaran: '))

let luas = PI * r * r
let keliling = 2 * PI * r

console.log("========================")
console.log("         HASIL          ")
console.log("------------------------")
console.log('Jari-jari : ' + r + ' cm')
console.log('Luas      : ' + luas.toFixed(2) + ' cm²')
console.log('Keliling  : ' + keliling.toFixed(2) + ' cm')