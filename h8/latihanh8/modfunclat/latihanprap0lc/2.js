/**
 * ==================
 * How far can I go
 * =================
 *
 * Terdapat sebuah lintasan yang merupakan array multi dimensi yang di setiap indexnya memiliki tiga kemungkinan value
 * O -> adalah posisi mobil
 * X -> adalah tujuan akhir mobil
 * ' ' -> adalah lintasan biasa
 *
 * Setiap mobil pasti akan memiliki bensin untuk berjalan, buatlah sebuah fungsi yang akan menentukan dimana mobil tersebut akan
 * berhenti dengan jumlah bensin yang dimiliki.
 * Mobil akan selalu berhenti pada titik tujuan walaupun masih terdapat bensin yang tersisa.
 *
 * Asumsi
 * - Mobil pasti bergerak ke arah kanan, jika sudah mencapai akhir mobil akan turun ke baris selanjutnya dan bergerak kembali dari kiri ke kanan
 * - Setiap kali mobil bergerak maka bensin akan berkurang 1l.
 *
 * Contoh:
 *
 * Lintasan
 * [
 *  [' ', ' ', 'O', ' ']
 *  [' ', ' ', 'X', ' ']
 * ]
 *
 * Jumlah bensin 2L
 *
 * Output:
 * [
 *  [' ', ' ', ' ', ' ']
 *  ['O', ' ', 'X', ' ']
 * ]
 *
 *
 */

function howFarCanIGo(track, fuel) {
  
}

var track1 = [
  [' ', ' ', 'O', ' '],
  [' ', ' ', 'X', ' ']
]

console.log(howFarCanIGo(track1, 2))
/**
 *  [
 *   [' ', ' ', ' ', ' '],
 *   [ 'O', ' ', 'X', ' ']
 * ]
 */

var track2 = [
  [' ', ' ', 'O', ' '],
  [' ', ' ', 'X', '']
]
console.log(howFarCanIGo(track2, 4))
/**
 *  [
 *  [' ', ' ', ' ', ' '],
 *  [' ', ' ', 'O', ' ']
 * ]
 */

var track2 = [
  [' ', ' ', 'O', ' '],
  [' ', ' ', 'X', '']
]
console.log(howFarCanIGo(track2, 10))
/**
 *  [
 *  [' ', ' ', ' ', ' '],
 *  [' ', ' ', 'O', ' ']
 * ]
 */

var track2 = [
  ['O', ' ', ' ', ' '],
  [' ', 'X']
]
console.log(howFarCanIGo(track2, 5))
/**
 *  [
 *  [' ', ' ', ' ', ' '],
 *  [' ', 'O']
 * ]
 */