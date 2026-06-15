const prompt = require("prompt-sync")({ sigint: true })
let a = Number(prompt('Masukan alas segitiga: '))
let tSegitiga = Number(prompt('Masukan tinggi segitiga: '))
let s1 = Number(prompt('Masukan sisi 1 segitiga: '))
let s2 = Number(prompt('Masukan sisi 2 segitiga: '))
let s3 = Number(prompt('Masukan sisi 3 segitiga: '))
let tPrisma = Number(prompt('Masukan tinggi prisma: '))

let luasAlas = 0.5 * a * tSegitiga
let kelilingAlas = s1 + s2 + s3
let volume = luasAlas * tPrisma
let luasPermukaan = (2 * luasAlas) + (kelilingAlas * tPrisma)

console.log("========================")
console.log("         HASIL          ")
console.log("------------------------")
console.log('Volume         : ' + volume.toFixed(2) + ' cm³')
console.log('Luas Permukaan : ' + luasPermukaan.toFixed(2) + ' cm²')