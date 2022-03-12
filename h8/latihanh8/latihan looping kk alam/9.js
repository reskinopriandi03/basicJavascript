//buatlah aplikasi untuk merotasi array
//  let input = [1, 2, 3, 4, 5, 0]
// output: [0, 1, 2, 3, 4, 5]

let input = ['h', 'a', 'l', 'l', 'o']
// output: ['o', 'h', 'a', 'l', 'l']


temp =[]
for(let i = 0; i < input.length; i ++){
    if(input[i] === input[input.length-1]){
        temp.unshift(input[input.length-1])
    } else {
        temp.push(input[i])
    }

}
// for(let j = input.length -1; j >= 0; j-- ){
//     temp.push(input[j])
// }
console.log(temp)
