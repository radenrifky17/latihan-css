const prompt = require("prompt-sync")({ sigint: true })
let d1 = Number(prompt('Masukan diagonal 1: '))
let d2 = Number(prompt('Masukan diagonal 2: '))
let sisiPendek = Number(prompt('Masukan sisi pendek: '))
let sisiPanjang = Number(prompt('Masukan sisi panjang: '))

let luas = 0.5 * d1 * d2
let keliling = 2 * (sisiPendek + sisiPanjang)

console.log("========================")
console.log("         HASIL          ")
console.log("------------------------")
console.log('Diagonal 1   : ' + d1 + ' cm')
console.log('Diagonal 2   : ' + d2 + ' cm')
console.log('Sisi Pendek  : ' + sisiPendek + ' cm')
console.log('Sisi Panjang : ' + sisiPanjang + ' cm')
console.log('Luas         : ' + luas.toFixed(2) + ' cm²')
console.log('Keliling     : ' + keliling.toFixed(2) + ' cm')