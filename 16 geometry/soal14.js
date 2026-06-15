const prompt = require("prompt-sync")({ sigint: true })
const PI = Math.PI
let r = Number(prompt('Masukan jari-jari: '))
let t = Number(prompt('Masukan tinggi tabung: '))

let volume = PI * r * r * t
let luasPermukaan = 2 * PI * r * (r + t)

console.log("========================")
console.log("         HASIL          ")
console.log("------------------------")
console.log('Jari-jari      : ' + r + ' cm')
console.log('Tinggi         : ' + t + ' cm')
console.log('Volume         : ' + volume.toFixed(2) + ' cm³')
console.log('Luas Permukaan : ' + luasPermukaan.toFixed(2) + ' cm²')