/**
 * ========
 * FizzBuzz
 * ========
 * 
 * Write a function that prints each number from 1 to 100 on a new line.
 * For each multiple of 3, print "Fizz" instead of number.
 * For each multiple of 5, print "Buzz" instead of number.
 * For numbers which are multiples of both 3 and 5, print "FizzBuzz" instead of number.
 */

function fizzBuzz() {
  // Code here
  /*
  Algoritma :
  1. Buat looping dari 1 - 100 [v]
  4. Jika number sekarang dimodulus 3 = 0 (kelipatan 3) dan dimodulus 5 = 0 (kelipatan 5) maka console log "FizzBuzz"
  2. Bikin conditional untuk ngecek jika number sekarang dimodulus 3 = 0 (kelipatan 3) maka console log "Fizz"
  3. Jika number sekarang dimodulus 5 = 0 (kelipatan 5) maka console log "Buzz"
  5. Selain itu console log number nya
  */
  let number = 1;
  while(number <= 100) {
    if (number % 3 === 0 && number % 5 === 0) {
      console.log("FizzBuzz");
    } else if (number % 3 === 0) {
      console.log("Fizz");
    } else if (number % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(number);
    }
    number++;
  }
}

fizzBuzz();