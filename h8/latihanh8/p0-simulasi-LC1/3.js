let row = 5;

// your code here
/*
1. Buat row nya dulu pake for based on row
2. Buat col nya pake for lagi sebanyak 3
3. Buat variable bantuan namanya counter dimulai dari angka 1
4. Di setiap perulangan col, tolong tambahkan value counter
*/




let col = 3
counter = 1
temp = ""

for (let i = 0; i< row; i++){
  for(let j = 0; j< col; j++){
    temp += counter
   if (j !== 2){
    temp += " "
   }
    counter++
  }
    if(i !== row -1){
      temp +=  "\n"
    }
   }
  
console.log(temp)



// let output = "";
// let counter = 1;

// for (let i = 0; i < row; i++) {
//   for (let j = 0; j < 3; j++) {
//     output += counter;
//     if (j !== 2) {
//       output += " ";
//     }
//     counter++;
//   }
//   if (i !== row - 1) {
//     output += "\n";
//   }
// }

// console.log(output);