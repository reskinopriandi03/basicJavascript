/*
====================
Tambah penumpang Bus
====================

[INSTRUCTION]
Terdapat function "tambahPenumpangBus" yang menerima 2 parameter berupa :
  1. array multidimensi yang berisi kondisi penumpang bus yang sudah menaiki bus
  2. array penumpang bus yang ingin menaiki bus
Fungsi ini akan mengembalikan array multidimensi yang sudah terisi oleh semua penumpang jika jumlah bangku yang kosong dan penumpang yang ingin naik pas / sama. (LIHAT EXAMPLE 1)
Sedangkan fungsi ini akan mengembalikan string berupa list penumpang yang tidak mendapatkan kursi, jika jumlah bangku yang kosong tidak mencukupi. (LIHAT EXAMPLE 2)

[EXAMPLES 1]
Input 1 :
  [
    ['Hary', '', 'Miftah'],
    ['', 'Tony', ''],
    ['Udin', 'Paijo', 'Butet']
  ]
Input 2 : ['Budi', 'Soleh', 'Miku']
Output :
  [
    ['Hary', 'Budi', 'Miftah'],
    ['Soleh', 'Tony', 'Miku'],
    ['Udin', 'Paijo', 'Butet']
  ]
--------------------------------------------
[EXAMPLES 2]
Input 1 :
  [
    ['Udin', '', ''],
    ['', '', 'Dede'],
    ['Saiful', 'Paijo', 'Butet']
  ]
Input 2 : ['Alucard', 'Balmond', 'Eudora', 'Nana', 'Miya', 'Zilong','Layla', 'Grock']
Output :
'Miya, Zilong, Layla, dan Grock tidak mendapatkan kursi bus. Silahkan cari bus lainnya.'

[Rules]:
- Dilarang menggunakan fungsi map, reduce, filter

*/

let myArray = [{"child": ["one", "two", "three", "four"]}, 
{"child": ["five", "six", "seven", "eight"]}];
for(let i = 0; i < myArray.length; i++){ 
let childArray = myArray[i].child; 
for(let j = 0; j < childArray.length; j++){ 
console.log(childArray[j]); 
}
}














// function tambahPenumpangBus(penumpangBus, penumpangBaru) {
// result =""
//   for(i = 0; i < penumpangBus.length; i++){
//     for(j = 0; j < penumpangBus[i].length; j++){
//       if(penumpangBus[i][j] === ""){
//         penumpangBus[i][j] = penumpangBaru.shift()
//       }
    
//     }
//   }
//   if(penumpangBaru > 0){
//     sisaPenumpang = ""
//     for(k=0; k<penumpangBaru.length; k++){
//         sisaPenumpang += penumpangBaru[i]
//     }
//   } else {
//     result = penumpangBus
//   }
//   return result
// }







console.log(
  tambahPenumpangBus(
    [
      ["Hary", "", "Miftah"],
      ["", "Tony", ""],
      ["Udin", "Paijo", "Butet"],
    ],
    ["Budi", "Soleh", "Miku"]
  )
);
/*
  [
    ['Hary', 'Budi', 'Miftah'],
    ['Soleh', 'Tony', 'Miku'],
    ['Udin', 'Paijo', 'Butet']
  ]
  */

console.log(
  tambahPenumpangBus(
    [
      ["Udin", "", ""],
      ["", "", "Dede"],
      ["Saiful", "Paijo", "Butet"],
    ],
    ["Alucard", "Balmond", "Eudora", "Nana", "Miya", "Zilong", "Layla", "Grock"]
  )
);














































// /////jawaban
// // ==================================================================





// function tambahPenumpangBus(penumpangBus, penumpangBaru) {
//   // Code here
//   let result = "";
//   for (let i = 0; i < penumpangBus.length; i++) {
//     for (let j = 0; j < penumpangBus[i].length; j++) {
//       if (penumpangBus[i][j] === "") {
//         penumpangBus[i][j] = penumpangBaru[0];
//         penumpangBaru.shift();
//       }
//     }
//   }
//   if (penumpangBaru.length > 0) {
//     let sisaPenumpang = ""
//     for (k = 0; k < penumpangBaru.length; k++) {
//       if ((k < penumpangBaru.length - 1)) {
//         sisaPenumpang += `${penumpangBaru[k]}, `
//       } else {
//         sisaPenumpang += `dan ${penumpangBaru[k]}`
//       }
//     }
//     result = `${sisaPenumpang} tidak mendapatkan kursi bus. Silahkan cari bus lainnya.`;
//   } else {
//     result = penumpangBus;
//   }
//   return result;
// }

// console.log(
//   tambahPenumpangBus(
//     [
//       ["Hary", "", "Miftah"],
//       ["", "Tony", ""],
//       ["Udin", "Paijo", "Butet"],
//     ],
//     ["Budi", "Soleh", "Miku"]
//   )
// );
// /*
//   [
//     ['Hary', 'Budi', 'Miftah'],
//     ['Soleh', 'Tony', 'Miku'],
//     ['Udin', 'Paijo', 'Butet']
//   ]
//   */

// console.log(
//   tambahPenumpangBus(
//     [
//       ["Udin", "", ""],
//       ["", "", "Dede"],
//       ["Saiful", "Paijo", "Butet"],
//     ],
//     ["Alucard", "Balmond", "Eudora", "Nana", "Miya", "Zilong", "Layla", "Grock"]
//   )
// );
// /*
//   'Miya, Zilong, Layla, dan Grock tidak mendapatkan kursi bus. Silahkan cari bus lainnya'
//   */










  
// function tambahPenumpangBus(penumpangBus, penumpangBaru) {

//   /*
//   buat variabel baru
//   looping penumpang bus
//   looping penumpang baru
//   kondisional jika penumpang bus = "" push penumpang baru
  
//   return bus
  
//   */
 
  

// let i = 0
// while(i < penumpangBus.length){
//   let j = 0
//   while(j < penumpangBus[i].length){
    
//     if(penumpangBus[i][j] === ""){
//       penumpangBus[i][j] = penumpangBaru[0]
//       penumpangBaru.shift()
//     }
//     if (penumpangBaru >0){
     
//      let sisaPenumpang = ""
//       for(k=0; k< penumpangBaru.length; k++){
//         if(k<penumpangBaru-1){
//           sisaPenumpang += `${penumpangBaru}`
//         } else {
//           sisaPenumpang == `${penumpangBaru} -=----` 
//         }
    
//       }
      
//      }    
    
    
//     j++
//   }
  
//   i++
// }
// result = penumpangBus
// return result

// }

// // console.log(tambahPenumpangBus([
// //   ['Hary', '', 'Miftah'],
// //   ['', 'Tony', ''],
// //   ['Udin', 'Paijo', 'Butet']
// // ], 
// // ['Budi', 'Soleh', 'Miku']));
// // /*
// // [
// //   ['Hary', 'Budi', 'Miftah'],
// //   ['Soleh', 'Tony', 'Miku'],
// //   ['Udin', 'Paijo', 'Butet']
// // ]
// // */

// // console.log(tambahPenumpangBus([
// //   ['Udin', '', ''],
// //   ['', '', 'Dede'],
// //   ['Saiful', 'Paijo', 'Butet']
// // ], 
// // ['Alucard', 'Balmond', 'Eudora', 'Nana', 'Miya', 'Zilong', 'Layla', 'Grock']));
// // /*
// // 'Miya, Zilong, Layla, dan Grock tidak mendapatkan kursi bus. Silahkan cari bus lainnya'
// // */



