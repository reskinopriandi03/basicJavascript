function manualSplit(Str) {

    kata = ""
    tampung = []
    //******************************* */
    for(let i = 0; i < Str.length; i++){
        if(Str[i] === " "){
            tampung.push(kata[i])
            kata = ""
        } else {
            kata += Str[i]
        } 
        
        if(Str[i] !== " "){
            tampung.push(kata[i])

        }
    }
    return tampung
}

console.log(manualSplit("I Love Javascript")); // ['I', 'Love', 'Javascript']
console.log(manualSplit("Javascript is so cool")); // ['Javasccript', 'is', 'so', 'cool']















































// //split string
// function manualSplit(str) {
//     let temp = '';
//     let temp1 = [];
//     for (let i = 0; i <= str.length - 1; i++) {
//       if (str[i] == ' ') {
//         temp1.push(temp);
//         temp = '';
//       } else {
//         temp += str[i];
//       }
//     }
//     if (temp1 != '') {
//       temp1.push(temp);
//     }
//     return temp1;
//   }

//   console.log(manualSplit('I Love Javascript')); // ['I', 'Love', 'Javascript']
// console.log(manualSplit('Javascript is so cool')); // ['Javasccript', 'is', 'so', 'cool']


// const manualSplit = (str, resultArray = [""]) => {
//     let j = 0;
    
//     for(const i in str) {
//         if(str[i] === ' ') {
//             j++;
//             resultArray.push("");
//         } else {
//             resultArray[j] += str[i];
//         }
//     }
//     return resultArray;
// }

// // let text = "I Love Javascript"
// let text = "Javascript is so cool"


// const stringSplit = manualSplit(text)
// console.log(stringSplit)


// //split string
// function manualSplit(str) {
//     let result = [];
//     let word = "";
//     for (let i = 0; i < str.length; i++) {
//       if (str[i] === " ") {
//         result.push(word);
//         word = "";
//       } else {
//         word += str[i];
//       }
//     }
//     if (word.length > 0) {
//       result.push(word);
//     }
//     return result;
//   }
  
//   console.log(manualSplit("I Love Javascript")); // ['I', 'Love', 'Javascript']
//   console.log(manualSplit("Javascript is so cool")); // ['Javasccript', 'is', 'so', 'cool']