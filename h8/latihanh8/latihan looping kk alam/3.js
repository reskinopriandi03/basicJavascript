/* 
Buatlah sebuah program yang akan mengumpulkan huruf kapital dari sebuah string
kemudian cetak hasilnya
contoh input: 
var str = 'ILoveJavascripT'
output: ILJT

wajib menggunakan looping
boleh menggunakan toUpperCase();
*/

var str = "ILoveJavascripT"
var kamus = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

var temp = ""
for(let i=0; i < str.length; i++){
    for(let j = 0; j< kamus.length; j++){
        if(str[i] === kamus[j]){
            temp += str[i]
        }
    }
}
console.log(temp)