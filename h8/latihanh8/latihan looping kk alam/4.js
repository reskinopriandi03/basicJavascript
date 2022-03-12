/**
 * +++++=========
 * Alay Encyrption
 * ==============
 *
 * Buatlah sebuah fungsi yang akan menerima satu paramter berupa string
 * sebuah string menjadi string alay.
 *
 * Untuk membuat sebuah string menjadi alay ada beberapa
 * - Semua huruf a akan dirubah menjadi angka 4
 * - Semua huruf i akan dirubah menjadi angka 1
 * - Semua huruf o akan dirubah menjadi angka 0
 * - Semua huruf e akan dirubah menjadi angka 3
 *
 * input:
 * let str = 'alay'
 * output = '4l4y'
 * 
 * input:
 * let str = 'zebra liar'
 * output = 'z3br4 l14r'
 */
let alay = "zebra liar"
let kamus = "aioe"
let tampung = ""

for(let i = 0; i<alay.length; i++){
    if(alay[i] === kamus[0]){
        tampung += "4"
    } else if(alay[i] === kamus[1]){
        tampung += "1"
    } else if(alay[i] === kamus[2]){
        tampung += "0"
    } else if(alay[i] === kamus[3]){
         tampung += "3"
    } else {
         tampung += alay[i]
    }

}
console.log(tampung)