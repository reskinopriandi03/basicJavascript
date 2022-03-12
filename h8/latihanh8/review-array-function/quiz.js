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

function tambahPenumpangBus(penumpangBus, penumpangBaru) {
  // Code here
  let output;

  let i = 0;
  while (i < penumpangBus.length) {
    let j = 0;
    while (j < penumpangBus[i].length) {
      if (penumpangBus[i][j] === "") {
        penumpangBus[i][j] = penumpangBaru.shift();
      }
      j++;
    }
    i++;
  }
  
  if (penumpangBaru.length === 0) {
    output = penumpangBus;
  } else {
    let sisaPenumpang = "";
    let i = 0;
    while (i < penumpangBaru.length) {
      if (i === penumpangBaru.length - 1) {
        sisaPenumpang += `dan ${penumpangBaru[i]}`;
      } else {
        sisaPenumpang += `${penumpangBaru[i]}, `;
      }
      i++;
    }
    output = `${sisaPenumpang} tidak mendapatkan kursi bus. Silahkan cari bus lainnya.`;
  }
  return output;
}

console.log(tambahPenumpangBus([
  ['Hary', '', 'Miftah'],
  ['', 'Tony', ''],
  ['Udin', 'Paijo', 'Butet']
], 
['Budi', 'Soleh', 'Miku']));
/*
[
  ['Hary', 'Budi', 'Miftah'],
  ['Soleh', 'Tony', 'Miku'],
  ['Udin', 'Paijo', 'Butet']
]
*/

console.log(tambahPenumpangBus([
  ['Udin', '', ''],
  ['', '', 'Dede'],
  ['Saiful', 'Paijo', 'Butet']
], 
['Alucard', 'Balmond', 'Eudora', 'Nana', 'Miya', 'Zilong', 'Layla', 'Grock']));
/*
'Miya, Zilong, Layla, dan Grock tidak mendapatkan kursi bus. Silahkan cari bus lainnya'
*/