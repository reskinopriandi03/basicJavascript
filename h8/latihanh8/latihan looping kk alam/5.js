// let string = '1233897`

// proses
// buatlah sebuah program yang akan memberikan `-` di antara dua angka ganil pada variable string di atas.
// Dengan menggunakan string diatas ouputnya adalah
// 123-389-7

// Contoh 2:
// ---------
// input: '1739028'
// output: '1-7-3-9028'

let string = '1739028'


let temp = ""
for(let i = 0; i < string.length; i++){
    if(Number(string[i]) % 2 !== 0){
    //    console.log(i)
        
    
    if((Number(string[i]) % 2 === 0)){
        break;
    }
    temp += string[i]
        temp += "-"
        
    } else {
        temp += string[i]
    }
    
    
}
console.log(temp)