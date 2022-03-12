let age = 9;
let height = 55;
let price = 0;

if (age <= 1) {
  console.log("Dilarang masuk!");
} else {
  if (age > 10) {
    price = 80000;
  }
  if (age >= 8 && age <= 10) {
    price = (height > 150) ? 70000 : 50000;
  }
  if (age >= 4 && age <= 7) {
    price = (height > 120) ? 55000 : 40000;
  }
  if (age >= 2 && age <= 3) {
    price = (height > 70) ? 40000 : 30000;
  }
  console.log(price);
}