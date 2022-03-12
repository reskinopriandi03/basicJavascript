function splitTransactions(array) {
  // Your code here
  let result = []

  for (let i = 0; i < array.length; i++) {
    let tempArr = []
    let tempStr = ""
    for (let j = 0; j < array[i].length; j++) {
      if (array[i][j] !== "-") {
        tempStr += array[i][j]
      }

      if (array[i][j] === "-" || j === array[i].length - 1) {
        tempArr.push(tempStr)
        tempStr = ""
      }
    }
    result.push(tempArr)
  }

  return result
}

function sortItemsByNumber(array) {
  // Your code here
  for (let i = 0; i < array.length; i++) {
    for (let j = i; j < array.length; j++) {
      if (Number(array[i][0]) > Number(array[j][0])) {
        let temp = array[i]
        array[i] = array[j]
        array[j] = temp
      }
    }
  }
  return array
}

function objectify(item) {
  // Your code here
  return {
    Number: item[0],
    Name: item[1],        
    Origin: item[2], 
    Destination: item[3]
  }
}

function calculatePrice(items) {
  const distance = ["Jakarta", "Depok", "Bogor", "Tangerang", "Bekasi"];
  // Your code here
  const hasilSplitTransactions = splitTransactions(items)
  const hasilSortItemsByNumber = sortItemsByNumber(hasilSplitTransactions)
  let result = []
  for (let i = 0; i < hasilSortItemsByNumber.length; i++) {
    const hasilObjectify = objectify(hasilSortItemsByNumber[i])
    let titikOrigin = 0
    let titikDestination = 0
    for (let j = 0; j < distance.length; j++) {
      if (hasilObjectify.Origin === distance[j]) {
        titikOrigin = j
      }

      if (hasilObjectify.Destination === distance[j]) {
        titikDestination = j
      }
    }
    let Cost = Math.abs(titikOrigin - titikDestination) * 20000

    let obj = { Name: hasilObjectify.Name, Cost }
    result.push(obj)
  }

  return result
}

let data1 = [
  "2-Rafi-Jakarta-Depok",
  "3-Afif-Bekasi-Tangerang",
  "4-Rafki-Bogor-Bekasi",
  "1-Zara-Tangerang-Bekasi",
];

console.log(calculatePrice(data1));
/*
 [
  { Name: 'Zara', Cost: 20000 },
  { Name: 'Rafi', Cost: 20000 },
  { Name: 'Afif', Cost: 20000 },
  { Name: 'Rafki', Cost: 40000 }
]
 */

let data2 = [
  "3-Budi-Depok-Bogor",
  "5-Echo-Tangerang-Depok",
  "1-Delta-Jakarta-Depok",
  "4-Andi-Jakarta-Bogor",
  "2-Charlie-Tangerang-Jakarta",
];

console.log(calculatePrice(data2))
/*
[
  { Name: 'Delta', Cost: 20000 },  
  { Name: 'Charlie', Cost: 60000 },
  { Name: 'Budi', Cost: 20000 },   
  { Name: 'Andi', Cost: 40000 },   
  { Name: 'Echo', Cost: 40000 }    
]
*/

module.exports = {
  splitTransactions,
  sortItemsByNumber,
  objectify,
  calculatePrice
}