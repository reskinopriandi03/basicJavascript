/*

Simple Calculator

Buatlah sebuah fungsi kalkulator yang menerima 2 parameter berupa angka dan satu parameter berupa operator
Operator yang akan kita lakukan adalah
+ -> penjumlahan angka tersebut
- -> pengurangan angka tersebut
* -> perkalian angka tersebut
/ -> pembagian angka tersebut
% -> sisa bagi angka tersebut

*/

/*
    input: 
    m = 5, n = 10

    output:
    15
*/
function tambah(m, n) {
    let result = m + n;
    return result;
}
// console.log(tambah(5, 10)); // 15

function kurang(m, n) {
    return m - n;
}
// console.log(kurang(3, 2)); // 1

function kali(m, n) {
    return m * n;
}
// console.log(kali(2, 3)); // 6

function bagi(m, n) {
    return m / n;
}
// console.log(bagi(8, 2)); // 4

function modulus(m, n) {
    return m % n;
}
// console.log(modulus(5, 2)); // sisa bagi 1

/*
    input: 
    angka1 = 5
    angka2 = 10
    operator = '+'

    output: 
    15
*/
function calculate(angka1, angka2, operator) { // angka1 = 5, angka2 = 10
    let result = 0;
    switch(operator) {
        case '+': {
            // result = angka1 operator angka2;
            // menjalankan string
            // let cmd = `${angka1} + ${angka2}`; // '5 + 10'
            // eval(cmd);

            result = tambah(angka1, angka2);
            break;
        }
        case '-': {
            result = kurang(angka1, angka2);
            break;
        }
        case '*': {
            result = kali(angka1, angka2);
            break;
        }
        case '/': {
            result = bagi(angka1, angka2);
            break;
        }
        case '%': {
            result = modulus(angka1, angka2);
            break;
        }
    }
    return result;
}

console.log(calculate(1, 2, "+")); // 3
// console.log(calculate(1, 2, "-")); // -1
// console.log(calculate(1, 2, "*")); // 2
// console.log(calculate(1, 2, "/")); // 0.5
// console.log(calculate(5, 2, "%")); // 1

