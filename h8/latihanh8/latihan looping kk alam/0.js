/*
BELANJA KE WARUNG
====================
Pada suatu hari, Reno di perintahkan oleh ibunya untuk belanja ke warung. Sesampainya di warung terdapat sebuah list dari barang yang tersedia di warung, Reno hanya akan membeli barang jika barang tersebut tersedia di warung.
Buatlah sebuah function yang akan menghitung total belanjaan dari reno, funtion menerima 1 parameter berupa array multidimensi dari barang yang di perintahkan oleh ibu untuk di beli dan jumlah yang harus dibeli. Function akan mengembalikan total harga belanjaan yang harus dibayar oleh reno
contoh : 
input : [
  ["Beras", 3], 
  ["Telur", 10], 
  ["Gula", 0.5], 
  ["Minyak", 5], 
  ["Tepung", 4]
]
barang tersedia :
{
  Melon : 15000,
  Beras : 8000,
  Telur : 1500,
  Gula : 12000,
  Minyak : 8000,
  Permen : 500,
  Sabun : 10000,
  Shampo : 9500,
  Pewangi : 17000
}
output : "Total Belanjaan yang harus dibayar adalah : Rp.85000"
*/

function belanjaWarung(arr){
  const daftarHarga = {
    Melon : 15000,
    Apel : 8500,
    Beras : 8000,
    Telur : 1500,
    Gula : 12000,
    Minyak : 8000,
    Permen : 500,
    Sabun : 10000,
    Shampo : 9500,
    Pewangi : 17000
  }

  if(arr.length === 0){
    return "tidak perlu pergi ke warung"
  }
  let totalHargaBelanja = 0
  for(let i = 0; i < arr.length; i++){
      let daftarBelanja = arr[i][0]
      let hargaBelanja = arr[i][1]
      // console.log(daftarBelanja)

      for(let key in daftarHarga){
        if(daftarBelanja === key){
          // console.log(hargaBelanja, daftarHarga[key], totalHargaBelanja)
        totalHargaBelanja += hargaBelanja * daftarHarga[key]      
        }
      }
  }



  return `Total Belanjaan yang harus dibayar adalah : Rp.${totalHargaBelanja}`
}

const belanja1 = [
  ["Beras", 3], 
  ["Telur", 10], 
  ["Gula", 0.5], 
  ["Minyak", 5], 
  ["Tepung", 4]
]

console.log(belanjaWarung(belanja1))//Total Belanjaan yang harus dibayar adalah : Rp.85000

const belanja2 = [
  ["Mobil",1],
  ["PS5", 4],
  ["Melon",5],
  ["Permen",100]
]
console.log(belanjaWarung(belanja2))//Total Belanjaan yang harus dibayar adalah : Rp.125000
console.log(belanjaWarung([]))//Tidak perlu pergi ke warung