// Tentukannlah nomor dari sebuah plat yang sudah diberikan
// example:
let plat = 'b 1234 ABC'
// output:
// '1234'
// let plat = 'AB 412 CC'
// output:
// `412`

temp = ""
let number = "1234567890"
for(let i = 0; i < plat.length; i++){
    for(let j = 0; j < number.length ; j++){
        if(plat[i] === number[j]){
            temp += plat[i]
        }
    }
}
console.log(temp)