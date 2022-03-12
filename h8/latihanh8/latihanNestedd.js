// // // var str = 'javascript is so cool';
// // // // output: 'tpircsavaj si os looc '
// // // var tempStr = '';
// // // for (var i = 0; i < str.length; i++) {
// // //     if (str[i] !== ' ') {
// // //         tempStr += str[i];
// // //     } 
// // //     if (str[i] === ' ' || i === str.length - 1) {
// // //         console.log(tempStr);
// // //         tempStr = '';
// // //     }
// // // }

// // var str = 'javascript is so cool';
// // // output: 'tpircsavaj si os looc '
// // var tempStr = '';
// // var newWord = '';
// // for (var i = 0; i < str.length; i++) {
// //     if (str[i] !== ' ') {
// //         tempStr = str[i] + tempStr;
// //     } 
// //     if (str[i] === ' ' || i === str.length - 1) {
// //         newWord += (tempStr + ' ');
// //         tempStr = '';
// //     }
// // }
// // console.log (newWord);


// // // var word = "#! L@ve J@v@$cr!pt. S@ Much";
// // // //var newWord = "";

// // // for (i = 0; i > word.length; i++) {
// // //     console.log(word[i]);

// // // } 

// // console.log("tes");

// const PI = 3.14;
// let r = 2;
// let code = "09k7628"

// const luasLingkaran = PI * r * r
// const keliling = 2 * PI * r

// for( i = 0; i < code.length -1; i++){
//     console.log(i)
//     if (code[i] === "k" || code[i] === "K"){
//         console.log(keliling)
//     } else if (code[i] === "l" || code[i] === "L"){
//         console.log(luasLingkaran)
//     } else {
//         console.log(`error :)`)
//     }
// }






let word = "Ja4va4scri1pt"
let lastCharacter = ""
let output = ""

if(word===""){
  console.log('Tidak ada kata yang bisa di proses');
}

for (let i = 0; i < word.length; i++) {
  
  if (Number(word[i])) { // kalau dy number maka proses
    for (let j = 0; j < Number(word[i]); j++) {
      output += lastCharacter  
    }
  } else {
    output += word[i]
  }
  lastCharacter = word[i]
}
console.log(output);






// let  kata = "1235k1"
// let satu = ""
// let dua= ""
// if (word===""){
//   console.log("tidak ada kata yg bisa di proses");
// }
// for(let i = 0; i < kata.length; i++){
//   satu += kata[i]
//   if(Number(kata[i])){
//     for(j=0; j<Number(kata[i]); j++){
//       dua += satu[i]
//     }
//   } else {satu = dua[i]
//   } dua = kata[i]
// }
// console.log(dua)