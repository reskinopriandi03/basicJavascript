// Buatlah Sebuah Fungsi dengan nama averageAndOlest yang menerima 1 parameter berupa array multidimensi. Fungsi ini akan mengembalikan sebuah array multidimensi dengan 2 data
// Data pertama -> Sebuah data dengan tipe number yang berisikan rata2 umur dari semua orang yang ada di dalam array people
// Data kedua -> Sebuah data dengan tipe array yang diambil dari salah satu data di array people yang memiliki umur paling tua

let people = [
    // [name, age, marital status]
    ['Dudu', 20, false],
    ['Dodo', 18, false],
    ['Didi', 25, true],
    ['Dede', 17, false],
    ['Bobo', 40, true],
    ['bibi', 25, false],
    ['bebe', 36, false],
    ['Baba', 28, true]
  ];
  
  function averageAndOlest(people) {
  umur = 0
  tua = 0
  jumlah = 0
  tampil = []
    for(i = 0; i< people.length; i++){
      if (people[i][1] > umur){
        umur = people[i][1]
        tua = i
      }
      jumlah += people[i][1]
    }
  let rata = jumlah / people.length
    tampil.push(rata)
    tampil.push(people[tua])
    return tampil
  
  
  
  }



  // Tulis code disini
  
  
  console.log(averageAndOlest(people));
  // output: 
  // [
  //     26.125,
  //     ['Bobo', 40, true]
  // ]