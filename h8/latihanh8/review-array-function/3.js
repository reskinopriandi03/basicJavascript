/**
 * ===============
 * Calculate Price
 * ===============
 * 
 * Write a function that has one parameter as an array of strings named "items".
 * All elements in array "items" have a price which is stored in variable "prices".
 * Calculate total price of all items in that array.
 * The function will return total price of all items in array.
 * 
 */

function calculatePrice(items) {
  const prices = [
    // j = 0  j = 1
    [ "bag", 6000 ],      // i = 0
    [ "clothes", 5000 ],  // i = 1
    [ "shoe", 2000 ],     // i = 2
    [ "snack", 500 ]      // i = 3
  ];
  // Code here
  /*
  Algoritma :
  1. Buat variabel totalPrice
  2. Looping parameter items
  3. Looping variable prices untuk mengecek harga dari item saat ini apakah ada di variable prices
  4. Jika item ditemukan di daftar prices maka totalPrice ditambah denga harga barang tersebut.
  5. Return totalPrice
  */

  let totalPrice = 0;
  let i = 0;
  while(i < items.length) {
    // console.log("i : ", items[i]);
    let j = 0;
    while(j < prices.length) {
      // console.log("j : ", prices[j]);
      if (items[i] === prices[j][0]) {
        totalPrice += prices[j][1];
        break;
      }
      j++;
    }
    i++;
  }
  return totalPrice;
}

console.log(calculatePrice([ "clothes", "bag" ])); // 11000
console.log(calculatePrice([ "bag", "snack" ])); // 6500
console.log(calculatePrice([ "shoe", "snack", "shoe" ])); // 4500