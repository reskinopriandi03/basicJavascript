//buatlah aplikasi untuk merubah number menjadi array dan me reverse number tersebut
// let input = 348597
// output: [ 7, 9, 5, 8, 4, 3]

let input = 6529736
// output: [6, 3, 7, 9, 2, 5, 6]
let temp = []
// kata = ""
// for(i = 0; i < input.length; i++){
    input = String(input)
    for(j = input.length-1; j >= 0; j--){
        temp.push(input[j])
        
    }
// }
console.log(temp)