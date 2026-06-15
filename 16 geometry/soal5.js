const prompt = require("prompt-sync")({ sigint: true })
let alas = Number(prompt('Masukan alas jajar genjang: '))
let tinggi = Number(prompt('Masukan tinggi jajar genjang: '))
let sisiMiring = Number(prompt('Masukan sisi miring: '))

let luas = alas * tinggi
let keliling = 2 * (alas + sisiMiring)

console.log("========================")
console.log("         HASIL          ")
console.log("------------------------")
console.log('Alas        : ' + alas + ' cm')
console.log('Tinggi      : ' + tinggi + ' cm')
console.log('Sisi Miring : ' + sisiMiring + ' cm')
console.log('Luas        : ' + luas.toFixed(2) + ' cm²')
console.log('Keliling    : ' + keliling.toFixed(2) + ' cm')