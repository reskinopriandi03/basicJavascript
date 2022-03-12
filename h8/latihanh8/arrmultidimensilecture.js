// ARRAY
/*
Tipe data => Structured Data type
Menyimpan lebih dari satu data
Penamaan nya harus jamak
Umumnya data yang di simpan sejenis
*/

// const arr = [1, 2, 3]
// let arr2 = []
// for(let i = 0; i < arr.length; i++) {
//   arr2.push(arr[i])
// }
// arr.push(4)
// arr = [5, 6, 7]
// console.log(arr2)

// REF
// 1 [1, 2, 3, 4]
// 2 [1, 2, 3]

// let data = ['Jennie', 'Jiso5', 'Lisa', 'Rose']


// tampilkan nama Jisoo
// console.log(data[1])

// tampilkan huruf terakhir Lisa

// const indexTerakhirLisa = data[2].length - 1
// console.log(indexTerakhirLisa, '====') // 3

// data.unshift('Winter')
// data.unshift('Karina')
// console.log(data[2])
// console.log(data[2][indexTerakhirLisa])

// ARRAY ==============================
// let data2 = ['Jennie', '20', 'Bandung']

// Ganti nama student menjadi 'Lisa'
// data2[0] = 'Lisa'
// console.log(data2)

// Ulang tahun, nambah 1 umurnya
// const umurBaru = String(Number(data2[1]) + 1)
// data2[1] = String(umurBaru)
// console.log(data2)

// ================== ARRAY MULTIDIMENSI
let students = [
  ['Jennie', [90, 80, 70, 80], 'Phase 0'],
  ['Lisa', [80, 80, 80, 100], 'Phase 1'],
  ['Jisoo', [80, 80, 70, 100], 'Phase 1'],
]

// 1. Tampilkan nama Jennie
// console.log(students[0]) // ['Jennie', [90, 80, 70, 80], 'Phase 0']
// console.log(students[0][0]) // 'Jennie'
// console.log(students[0][0][0]) // 'J'


// 2. Tampilkan nilai 100
// console.log(students[1][1][3])


// 3. Tampilkan Array scores Jisoo
// console.log(students[2][1])


// 4. Hitung rata rata scores Lisa
// let totalNilai = 0
// for(let i = 0; i < students[1][1].length; i++) {
//   const nilai = students[1][1][i]
//   totalNilai += nilai
// }

// totalNilai = totalNilai / students[1][1].length
// console.log(totalNilai)


// 5. Tampilkan semua nama student
// for(let i = 0; i < students.length; i++) {
//   console.log(students[i][0])
// }


// 6. Tampilkan semua score student
// for(let i = 0; i < students.length; i++) {
//   console.log(students[i][1])
// }

// 7. Hitung rata rata score setiap student

// Jennie memiliki nilai rata rata <rata-rata nilai>
// Lisa memiliki nilai rata rata <rata-rata nilai>

// Akses students
// Akses semua score
// Hitung rata"
// Format output

// [
//   ['Jennie', [90, 80, 70, 80], 'Phase 0'],
//   ['Lisa', [80, 80, 80, 100], 'Phase 1'],
//   ['Jisoo', [80, 80, 70, 100], 'Phase 1'],
// ]

for(let i = 0; i < students.length; i++) {
  const scores = students[i][1]
  let total = 0

  for(let j = 0; j < scores.length; j++) {
    total += scores[j]
    
  }

  let average = total / scores.length
  console.log(`${students[i][0]} memiliki nilai rata-rata ${average}`)
}

// ============================= SOAL
let row = 5
// [
//   ['*', '*', '*', '*', '*'],
//   ['*', '*', '*', '*', '*'],
//   ['*', '*', '*', '*', '*'],
//   ['*', '*', '*', '*', '*'],
//   ['*', '*', '*', '*', '*']
// ]
let result = []
for(let i = 0; i < row; i++) {
  let temp = []

  for(let j = 0; j < row; j++) {
    temp.push('*')
  }

  result.push(temp)
}
console.log(result)


// ===================== QUIZ
// Buatlah Sebuah Fungsi dengan nama averageAndOlest yang menerima 1 parameter berupa array multidimensi. Fungsi ini akan mengembalikan sebuah array multidimensi dengan 2 data
// Data pertama -> Sebuah data dengan tipe number yang berisikan rata2 umur dari semua orang yang ada di dalam array people
// Data kedua -> Sebuah data dengan tipe array yang diambil dari salah satu data di array people yang memiliki umur paling tua

let people = [
  // [name, age, marital status]
  ['Dudu', 20, false],
  ['Dodo', 18, false],
  ['Didi', 20, true],
  ['Dede', 17, false],
  ['Bobo', 40, true],
  ['bibi', 25, false],
  ['bebe', 36, false],
  ['Baba', 40, true]
];

// Tulis code disini
function averageAndOlest(array) {
  const result = []
  let store = 0
  let tua = array[0]

  for (let i = 0; i < array.length; i++) {
    store += array[i][1]
    if (array[i][1] > tua[1]) {
      tua = array[i]
    }
    console.log(tua)
  }
  
  const average = store / array.length
  result.push(average)
  result.push(tua)
  return result
}

console.log(averageAndOlest(people));
// output: 
// [
//   26.125,
//   ['Bobo', 40, true]
// ]



// ========== COBA KALO OUTPUT NYA BEGINI
// let people = [
//   // [name, age, marital status]
//   ['Dudu', 20, false],
//   ['Dodo', 18, false],
//   ['Didi', 20, true],
//   ['Dede', 17, false],
//   ['Bobo', 40, true],
//   ['bibi', 25, false],
//   ['bebe', 36, false],
//   ['Baba', 40, true]
// ];
// CASE 1
// [
//     26.125,
//     ['Bobo', 40, true],
//     ['Baba', 40, true]
// ]


// CASE 2
// [
//   26.125,
//   [
//     ['Bobo', 40, true],
//     ['Baba', 40, true]
//   ]
// ]

