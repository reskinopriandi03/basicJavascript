/**
 * ================
 * Even and Reverse
 * ================
 * 
 * Write a function that has one parameter as an array of numbers.
 * Filter all even number inside array and insert it into new array.
 * And then reverse all even numbers inside new array.
 * The function will return the new array that contains reversed even numbers.
 * 
 */

function reverseEvenNumber(numbers) {
  // Code here
  /*
  Algoritma :
  1. Bikin variabel penampung untuk output
  2. Lakukan looping untuk array numbers
  3. Bikin conditional untuk mengecek apakah element sekarang itu genap / ganjil
  4. Jika genap maka simpan di variabel output pake unshift
  5. Jika ganjil dah lah
  6. Jika sudah selesai looping bisa return variable output nya
  */

  let output = [];
  // Unshift Way
  // let i = 0;
  // while(i < numbers.length) {
  //   if (numbers[i] % 2 === 0) {
  //     output.unshift(numbers[i]);
  //   }
  //   i++;
  // }

  // Push Way
  // let i = numbers.length - 1;
  // while(i >= 0) {
  //   if (numbers[i] % 2 === 0) {
  //     output.push(numbers[i]);
  //   }
  //   i--;
  // }

 for(i= numbers.length -1; i >= 0 ; i --){
   if(numbers[i] % 2 === 0){
     output.push(numbers[i])
   }
 }
  return output;
}

console.log(reverseEvenNumber([ 1, 2, 3, 4, 5 ])); // [ 4, 2 ]
                           // [ 4, 2 ]
console.log(reverseEvenNumber([ 10, 9, 8, 7, 6, 5, 4 ])); // [ 4, 6, 8, 10 ]
                           // [ 10, 8, 6, 4 ]