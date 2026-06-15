const prompt = require("prompt-sync")({ signint: true })
let sisi = Number(prompt("Masukan sisi"))
let luas = sisi ^ 2
let keliling = 4 * sisi

console.log("=================")
console.log("      HASIL      ")
console.log("-----------------")

console.log('luas persegi : ' + luas + ' cm')
console.log("keliling persegi : "+ keliling)
console.log(
    `Luas persegi/t/t: ${ luas.toFixed(2) } cm2
     Keliling Persegi/t: ${keliling.toFixed(2)} cm`)