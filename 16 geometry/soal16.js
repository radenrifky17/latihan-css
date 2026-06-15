const prompt = require("prompt-sync")({ sigint: true })
const PI = Math.PI
let r = Number(prompt('Masukan jari-jari bola: '))

let volume = (4/3) * PI * Math.pow(r, 3)
let luasPermukaan = 4 * PI * r * r

console.log("========================")
console.log("         HASIL          ")
console.log("------------------------")
console.log('Jari-jari      : ' + r + ' cm')
console.log('Volume         : ' + volume.toFixed(2) + ' cm³')
console.log('Luas Permukaan : ' + luasPermukaan.toFixed(2) + ' cm²')