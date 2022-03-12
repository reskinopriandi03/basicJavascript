/**
 * #1 - string
 * 
 * diberikan list stok barang dalam bentuk string,
 * coba rapikan sehingga list barang mudah dibaca
 * 
 * boleh pakai built-in split
 */

function rapikanStok(str) {
    let obj = {}
    let nama = ""
    let jumlah = 0
    for(let i = 0; i< str.length; i ++){
        if(str[i] === Number){
            nama += str[i]
        } if(i === str[i].length-1){
            nama += str[i]
        }
    //     if(str[i] === )
}
console.log(nama)
}

console.log(rapikanStok("hp 2, casing hp 5, laptop 1, headset 1, ikat kabel 12"))
//{ hp: 2, 'casing hp': 5, laptop: 1, headset: 1, 'ikat kabel': 12 }


// console.log(rapikanStok("permen karet 13, cookies 7, permen 128, kelereng 1046, kotak 3"))
// { 'permen karet': 13, cookies: 7, permen: 128, kelereng: 1046, kotak: 3 }
// -----------------------------------------------


/**
 * #2 - number
 * 
 * diberikan sebuah list array berisi number, 
 * pisahkan list tersebut menjadi:
 * ada berapa angka genap?
 * ada berapa angka yang negatif?
 * ada berapa input yang invalid?
 * total ada berapa angka?
 * 
 * #2.1
 * selain memberikan total, berikan juga detail
 * angka apa saja yang genap, negatif, dan invalid
 */

// function countNumbers(arr) {

// }

// let inputNums = [1, 2, 34, 0, 25, NaN, null, -30, 49]
// // countNumbers(inputNums)
// //{ genap: 4, negatif: 1, invalid: 2, total: 9 }


// function countNumbersDetail(arr) {
    
// }

// // countNumbersDetail(inputNums)
// // {
// //     genap: { count: 4, detail: [2, 34, 0, -30] },
// //     negatif: { count: 1, detail: [-30] },
// //     invalid: { count: 2, detail: [NaN, null] },
// //     total: { count: 9, detail: [1, 2, 34, 0, 25, NaN, null, -30, 49] }
// // }
// // -----------------------------------------------


// /**
//  * #3 - array
//  * 
//  * di rumah ada banyak jenis game,
//  * dan masing2 game memerlukan waktu berbeda
//  * selama masih ada waktu bermain, 
//  * adikmu Joe akan terus bermain,
//  * berpindah2 jenis game setiap selesai
//  * 
//  * berikan rincian untuk setiap game
//  * berapa kali dimainkan oleh Joe
//  * 
//  * input: waktu bermain, list game dan waktunya
//  * output: setiap game dimainkan berapa kali
//  * 
//  * contohnya, misal diberikan waktu 102 menit dan 3 game:
//  * ada game tekken (20menit), monopoly (30), dan candy crush (7)
//  * dengan 102 menit, 
//  * Joe akan main tekken (sisa 82 menit), 
//  * selesai tekken main monopoly (sisa 52 menit),
//  * selesai monopoly main candy crush (sisa 45 menit),
//  * selesai candy crush main tekken lagi (sisa 25 menit),
//  * selesai tekken main monopoly (waktu habis)
//  * 
//  * #3.1 - bonus
//  * berikan juga detail game terakhir yang dimainkan Joe,
//  * dan apakah game itu selesai atau tidak.
//  * Jika tidak selesai, perlu berapa menit lagi untuk diselesaikan?
//  */

// function mainGame(waktu, listGame) {
    
// }

// let list1 = [
//     ['tekken', 20],
//     ['monopoly', 30],
//     ['candy crush', 7],
// ]
// mainGame(102, list1)
//  // { tekken: 2, monopoly: 2, 'candy crush': 1 }
//  // game terakhir adalah monopoly dan tidak selesai, perlu 5 menit lagi