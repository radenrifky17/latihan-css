const prompt = require("prompt-sync")({ sigint: true })
let p = Number(prompt('Masukan panjang: '))
let l = Number(prompt('Masukan lebar: '))
let t = Number(prompt('Masukan tinggi: '))

let volume = p * l * t
let luasPermukaan = 2 * (p*l + p*t + l*t)

console.log("========================")
console.log("         HASIL          ")
console.log("------------------------")
console.log('Panjang        : ' + p + ' cm')
console.log('Lebar          : ' + l + ' cm')
console.log('Tinggi         : ' + t + ' cm')
console.log('Volume         : ' + volume.toFixed(2) + ' cm³')
console.log('Luas Permukaan : ' + luasPermukaan.toFixed(2) + ' cm²')