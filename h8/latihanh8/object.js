function groupByAge (arr) {
    let result = {};
    let age = 0;
 
    for (let i = 0; i < arr.length; i++) {
       age = 2022-arr[i];
       let ageTemp = 0;
       let countAge = 0;
       
       for (let j = 0; j < arr.length; j++) {
          ageTemp = 2022-arr[j];
          
          if (age === ageTemp) {
             countAge++;
          }
       }
       
       result[age] = countAge;
    }
 
    return result;
 }

console.log(groupByAge([2004, 1992, 1822, 2004, 1822, 1996, 1996]));

/**
 * {
 *  18: 2,
 *  30: 1,
 *  200: 2,
 *  26: 2
 * }
 */



