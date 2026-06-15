const prompt = require("prompt-sync")({ sigint: true })
const PI = Math.PI
let r = Number(prompt('Masukan jari-jari: '))
let t = Number(prompt('Masukan tinggi kerucut: '))

let s = Math.sqrt(r*r + t*t) // garis pelukis
let volume = (1/3) * PI * r * r * t
let luasPermukaan = PI * r * (r + s)

console.log("========================")
console.log("         HASIL          ")
console.log("------------------------")
console.log('Jari-jari      : ' + r + ' cm')
console.log('Tinggi         : ' + t + ' cm')
console.log('Garis Pelukis  : ' + s.toFixed(2) + ' cm')
console.log('Volume         : ' + volume.toFixed(2) + ' cm³')
console.log('Luas Permukaan : ' + luasPermukaan.toFixed(2) + ' cm²')