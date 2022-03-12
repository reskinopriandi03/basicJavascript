// input = 'baba-4'
// output = ['baba', '4']
function splitByDash(str) {
  let result = [];
  let tmp = '';
  for (let j = 0; j < str.length; j++) {
    let perChar = str[j]; // b, a, b, e, -, 1, dst
    if (perChar === '-') {
      result.push(tmp);
      tmp = '';
    }
    else if (j === str.length - 1) {
      tmp += perChar;
      result.push(tmp);
    }
    else {
      tmp += perChar;
    }
  }
  return result;
}
// console.log(splitByDash('baba-4')); // [ 'baba', '4' ]

/*
                    tmp             result
b <-- cabang 3      '' -> 'b'       []
a <-- cabang 3      'b' -> 'ba'     []
b <-- cabang 3      'ba' -> 'bab'   []
a <-- cabang 3      'bab' -> 'baba' []
- <-- cabang 1      'baba' -> ''    ['baba']
4 <-- cabang 2      '' -> '4'       ['baba', '4']

*/

/**
 * function splitter akan mengembalikan array multidimensi yang masing" datanya sudah dipisahkan antara nama dan umur
 
  let input = [
    ['baba-4'],
    ['babe-13'],
    ['bebe-38'],
    ['babo-121'],
    ['bobo-8']
  ];
  splitter(input)
  // return
  [
    ['baba', '4'],
    ['babe', '13'],
    ['bebe', '38'],
    ['babo', '121'],
    ['bobo', '8']
  ]
 */
function splitter(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let perItem = arr[i]; // ['baba-4'], ['babe-13'], dst
    let perString = perItem[0]; // 'baba-4', babe-13, dst

    // ---------------
    let perStringYangSplitted = splitByDash(perString);
    // perStringYangSplitted => ['baba', '4']
    // ----------------------

    result.push(perStringYangSplitted);
    // console.log(perItem, perStringYangSplitted);
  }

  return result;
}
// let input = [["baba-4"], ["babe-13"], ["bebe-38"], ["babo-121"], ["bobo-8"]];
// console.log(splitter(input));

/**
 * function filterAge akan mengembalikan array nama" yang memenuhi kriteria umur
 * 
 *  let input = [
      ['baba', '4'],
      ['babe', '13'],
      ['bebe', '38'],
      ['babo', '121'],
      ['bobo', '8']
    ]
 * filterAge(input)
    // return
    ['babe', 'bebe']
 */
function filterAge(arr) {
  let result = [];

  for(let i = 0; i < arr.length; i++) {
    let perItem = arr[i]; // ['baba', '4'], ['babe', '13'], dst

    let perNama = perItem[0]; // baba, babe, dst
    let perAge = perItem[1]; // '4', '13', dst
    let perAgeNumber = Number(perAge); // 4, 13, dst

    if(perAgeNumber >= 10 && perAgeNumber <= 60) {
      result.push(perNama);
    }
  }

  return result;
}
// let input = [
//   ['baba', '4'],
//   ['babe', '13'],
//   ['bebe', '38'],
//   ['babo', '121'],
//   ['bobo', '8']
// ]
// console.log(filterAge(input)); // ['babe', 'bebe']

/**
 * function siapVaksin adalah function utama yang akan mengembalikan semua nama" yang siap divaksin
 */

/*
  input: [["baba-4"], ["babe-13"], ["bebe-38"], ["babo-121"], ["bobo-8"]]

  process:

  0- validation

  1- 
  [["baba-4"], ["babe-13"], ["bebe-38"], ["babo-121"], ["bobo-8"]] =>
  [
    ["baba", "4"], 
    ["babe", "13"], 
    ["bebe", "38"], 
    ["babo", "121"], 
    ["bobo", "8"]
  ]

  2- 
  [
    ["baba", "4"], 
    ["babe", "13"], 
    ["bebe", "38"], 
    ["babo", "121"], 
    ["bobo", "8"]
  ] =>
  ['babe', 'bebe']

  output: 
  ['babe', 'bebe']
  'invalid input', 'input must be an array'
*/
function siapVaksin(data) {
  let result;

  if(data === undefined) {
    result = 'invalid input';
    return result;
  }
  else if(Array.isArray(data) === false) {
    result = 'input must be an array';
    return result;
  }

  let splittedArray = splitter(data);
  let filterredArray = filterAge(splittedArray);
  result = filterredArray;
  return result;
}

const people = [["baba-4"], ["babe-13"], ["bebe-38"], ["babo-121"], ["bobo-8"]];
console.log(siapVaksin(people)); // ['babe', 'bebe']
console.log(siapVaksin()); // 'invalid input' => array nya undefined
console.log(siapVaksin("asdasd")); // 'input must be an array'