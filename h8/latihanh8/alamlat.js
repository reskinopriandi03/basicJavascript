function manualSplit(Str) {

    kata = ""
    tampung = []
    for(i=0; i< Str.length; i++){
        if(Str[i] === " "){
            tampung.push(kata)
            kata = ''
        } else {
            kata += Str[i]
        }
    }
    if (Str[i] !== " "){
        tampung.push(kata)
    }
    
    return tampung
}

console.log(manualSplit("I Love Javascript")); // ['I', 'Love', 'Javascript']
console.log(manualSplit("Javascript is so cool")); // ['Javasccript', 'is', 'so', 'cool']















































// //split string
// function manualSplit(str) {
//     let temp = '';
//     let temp1 = [];
//     for (let i = 0; i <= str.length - 1; i++) {
//       if (str[i] == ' ') {
//         temp1.push(temp);
//         temp = '';
//       } else {
//         temp += str[i];
//       }
//     }
//     if (temp1 != '') {
//       temp1.push(temp);
//     }
//     return temp1;
//   }

//   console.log(manualSplit('I Love Javascript')); // ['I', 'Love', 'Javascript']
// console.log(manualSplit('Javascript is so cool')); // ['Javasccript', 'is', 'so', 'cool']


// const manualSplit = (str, resultArray = [""]) => {
//     let j = 0;
    
//     for(const i in str) {
//         if(str[i] === ' ') {
//             j++;
//             resultArray.push("");
//         } else {
//             resultArray[j] += str[i];
//         }
//     }
//     return resultArray;
// }

// // let text = "I Love Javascript"
// let text = "Javascript is so cool"


// const stringSplit = manualSplit(text)
// console.log(stringSplit)


// //split string
// function manualSplit(str) {
//     let result = [];
//     let word = "";
//     for (let i = 0; i < str.length; i++) {
//       if (str[i] === " ") {
//         result.push(word);
//         word = "";
//       } else {
//         word += str[i];
//       }
//     }
//     if (word.length > 0) {
//       result.push(word);
//     }
//     return result;
//   }
  
//   console.log(manualSplit("I Love Javascript")); // ['I', 'Love', 'Javascript']
//   console.log(manualSplit("Javascript is so cool")); // ['Javasccript', 'is', 'so', 'cool']

/*
jika text sama dengan spasi tambahkan penampung

*/





// row = 5

// for(i = 0 ; i < row  ; i++) {
//     temp = ""
//     for(j = 0; j < row ; j++){
//         if(i === 0 || i === 4){
//             temp += "*"
//         }     
//         else{
//            temp += "#"
//         }
//     }
//     console.log(temp)
// }


// let text = 'I Love JavascriptI Love Javascript';
// let kamus = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

// let kataBaru = ""
// for(let i = 0; i < text.length ; i ++){
//     for(let j = 0 ; j < kamus.length; j++){
//         if(text[i] === kamus[j]){
//         kataBaru += text[i]
//         }
//     }
// }

// console.log(kataBaru)
// console.log(kataBaru.length)








// Kamu diminta untuk memprogram suatu game sederhana, Proxytia namanya. 
// Untuk memulai game itu diperlukan 2 variabel (untuk sekarang), yaitu nama dan peran. 
// Variabel peran harus memiliki isi data, 
// bila kosong pemain akan diberikan peringatan berupa "Pilih Peranmu untuk memulai game". 
// Terdapat 3 peran berbeda yaitu Ksatria, Tabib, dan Penyihir. 
// Tugas Anda adalah untuk membuat program yang mengecek isi variabel peran serta mengeluarkan respon sesuai isi variabel tersebut.

// //Contoh input
// var nama = 'Mikael';
// var peran = 'tabib';

// if(nama === "" && peran === ""){
//     console.log("nama harus diisi!")
// } else if (peran === ""){
//     console.log(`halo ${nama}, Pilih peranmu untuk memulai game!`)
// } else if (peran === "ksatria"){
//     console.log(`selamat datang di dunia proxytia, ${nama}`)
//     console.log(`Halo ${peran} ${nama}, kamu dapat menyerang dengan senjatamu!`)
// } else if (peran === "tabib"){
//     console.log(`selamat datang di dunia proxytia, ${nama}`)
//     console.log(`halo ${peran} ${nama} kamu akan membantu temanmu yang terluka. `)
// } else if (peran === "penyihir"){
//     console.log(`selamat datang di dunia proxytia, ${nama}`)
//     console.log(`halo ${peran} ${nama} ciptakan keajaiban yang membantu kemenanganmu!`)
// }


// Output untuk Input nama = '' dan peran = ''
// "Nama harus diisi!"

// //Output untuk Input nama = 'Mikael' dan peran = ''
// "Halo Mikael, Pilih peranmu untuk memulai game!"

// //Output untuk Input nama = 'Nina' dan peran 'Ksatria'
// "Selamat datang di Dunia Proxytia, Nina"
// "Halo Ksatria Nina, kamu dapat menyerang dengan senjatamu!"

// //Output untuk Input nama = 'Danu' dan peran 'Tabib'
// "Selamat datang di Dunia Proxytia, Danu"
// "Halo Tabib Danu, kamu akan membantu temanmu yang terluka."

// //Output untuk Input nama = 'Zero' dan peran 'Penyihir'
// "Selamat datang di Dunia Proxytia, Zero"
// "Halo Penyihir Zero, ciptakan keajaiban yang membantu kemenanganmu!"