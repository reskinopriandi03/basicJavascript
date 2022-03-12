//               0123456
let exercise  = '<>^v>>>'; // Isi value sesuai keinginanmu
let userInput = '<>^^>><'; // Isi value sesuai keinginanmu
//               0123456
// Your code here
/*
algoritma =
1. v Cek length apakah sama atau gak
2. v Klo ga sama maka tampilkan tidak lengkap.
3. v Klo sama maka looping userInput cek satu per satu input di userInput.
4. v Kita bandingkan satu per satu sama exercise index sama dengan userInput.
5. v Jika sama maka point nambah 10 jika tidak biarin
6. v Hitung total max point = userInput.length * 10
7. v Hitung total point = point / total max point
8. v Hitung percentage = total point * 100 (jangan dibulatin ke bawah)
9. v Tentuin kategori if else
*/
let score = 0
let totalScore = 0
let maxScore = userInput.length * 10
let percentage = 0
let category = ""
if(exercise.length !== userInput.length){
  console.log("input yang anda masukkan tidak lengkap!")
} else {
  for(i=0; i<userInput.length -1; i++){
    if(userInput[i] === exercise[i]){
      score += 10
    }
    
  }
const totalScore = score / maxScore
const percentage = Math.floor(totalScore * 100)


if(percentage === 100){
  category = "perfect"
} else if (percentage >= 80) {
  category = "great"
} else if (percentage >= 60) {
  category = "good"
} else if(percentage >= 60){
  category = "bad"
}



console.log(
  
  `anda mendapatkan ${score} / ${maxScore}. persentase: ${percentage}, category ${category}`
  )


}
































// let point = 0;
// const totalMaxPoint = userInput.length * 10;
// let totalPoint = 0;
// let percentage = 0;
// let category = "";

// if (userInput.length !== exercise.length) {
//   console.log("Input yang anda masukkan tidak lengkap!");
// } else {
//   for (let i = 0; i < userInput.length; i++) {
//     if (userInput[i] === exercise[i]) {
//       point = point + 10;
//     }
//   }
//   totalPoint = point / totalMaxPoint;
//   percentage = Math.floor(totalPoint * 100);
//   if (percentage === 100) {
//     category = "Perfect";
//   } else if (percentage >= 80) {
//     category = "Great";
//   } else if (percentage >= 60) {
//     category = "Good";
//   } else if (percentage >= 0) {
//     category = "Bad";
//   }
//   console.log(`Anda mendapatkan score ${point} / ${totalMaxPoint}. Persentase: ${percentage}%, Kategori : ${category}`);
// }