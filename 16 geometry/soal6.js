const prompt = require("prompt-sync")({ sigint: true })
let sisiAtas = Number(prompt('Masukan panjang sisi atas: '))
let sisiBawah = Number(prompt('Masukan panjang sisi bawah: '))
let tinggi = Number(prompt('Masukan tinggi trapesium: '))
let sisiKiri = Number(prompt('Masukan panjang sisi kiri: '))
let sisiKanan = Number(prompt('Masukan panjang sisi kanan: '))

let luas = 0.5 * (sisiAtas + sisiBawah) * tinggi
let keliling = sisiAtas + sisiBawah + sisiKiri + sisiKanan

console.log("========================")
console.log("         HASIL          ")
console.log("------------------------")
console.log('Sisi Atas   : ' + sisiAtas + ' cm')
console.log('Sisi Bawah  : ' + sisiBawah + ' cm')
console.log('Tinggi      : ' + tinggi + ' cm')
console.log('Sisi Kiri   : ' + sisiKiri + ' cm')
console.log('Sisi Kanan  : ' + sisiKanan + ' cm')
console.log('Luas        : ' + luas.toFixed(2) + ' cm²')
console.log('Keliling    : ' + keliling.toFixed(2) + ' cm')