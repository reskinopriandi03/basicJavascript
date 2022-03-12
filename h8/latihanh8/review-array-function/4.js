/**
 * ===========
 * Min Max Avg
 * ===========
 * 
 * Write a function that has one parameter as an array of numbers named "numbers".
 * Search the minimum number and maximum number inside the array.
 * Calculate the average number of all numbers inside the array.
 * The function will return a new array that contains minimun number, maximum number and average number.
 * 
 */

function minMaxAvg(numbers) {
  // Code here
  /*
  Algoritma :
  1. Bikin variabel untuk minimum, maksimum, totalJumlah, totalNumber, average dan output berupa array kosong
  2. Looping ke numbers
  3. Looping ke numbers[i]
  4. Bikin conditional untuk cek minimum (number saat ini < minimum saat ini) dan maksimum (number saat ini > maksimum saat ini)
  5. Tambahkan totalJumlah dengan number saat ini (numbers[i][j])
  6. Tambahkan totalNumber++
  7. Jika selesai looping maka hitung average = totalJumlah / totalNumber
  8. Output kita push dengan minimum, maksimum, average
  9. Return output
  */

  let min = Number.MAX_VALUE; // Infinity
  let max = Number.MIN_VALUE; // -Infinity
  let average = 0;
  let sum = 0;
  let count = 0;
  let output = [];

  let i = 0;
  while (i < numbers.length) {
    // console.log("i : ", numbers[i]);
    let j = 0;
    while(j < numbers[i].length) {
      // console.log("j : ", numbers[i][j]);
      // Cek minimum
      if (numbers[i][j] < min) {
        min = numbers[i][j];
      }
      // Cek maksimum
      if (numbers[i][j] > max) {
        max = numbers[i][j];
      }
      sum += numbers[i][j];
      count++;
      j++;
    }
    i++;
  }
  average = sum / count;
  // console.log("min : ", min);
  // console.log("max : ", max);
  // console.log("average : ", average);
  // console.log("sum : ", sum);
  // console.log("count : ", count);
  // output.push(min, max, average);
  return output;
}

console.log(minMaxAvg([
  [ 2, 3, 1 ],
  [ 5, 6, 7, 6, 4 ],
  [ 0, 1, -1 ],
  [ 8, 9 ]
]));
// [ -1, 9, 3.923076923076923 ]