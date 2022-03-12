// Tampilkanlah console log seperti di bawah ini
// 123
// 45
// 6

let angka = 0
let row = 4
let oke = 0
let baru = 0
let hasil = ""
for(let k = 1; k <= row; k++){
    angka += k
}
for(let r = 1; r<= 10; r ++){
    hasil += r
    if(hasil.length === row){
        console.log(hasil)
        hasil = ""
        row--
    }
}
    if(hasil.length > 0){
    console.log(hasil)
}
// console.log(angka)

















// for(let i = 0; i < angka.length ; i ++ ){
//     hasil += angka[i]
    // if(hasil.length === row){
    //     console.log(hasil)
    //     hasil = ""
    //     row--
    // }
    
// }
// 1234
// 567
// 89
// 10