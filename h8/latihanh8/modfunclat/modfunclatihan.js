/**
 * Buatlah program untuk mengumpulkan pilihan produk mana saja yang sesuai dengan uang customer dan stock tersedia.
 */

 let products = [
    ["baju", 50000, 3],
    ["sepatu", 125000, 2],
    ["tas", 99000, 1],
    ["jam tangan", 525000, 1],
    ["permen", 2500, 0],
];

/**
 * function filterStockAndPrice akan mengembalikan array produk yang sudah difilter berdasarkan harga dan stock
 * 
 *  let input = [
      ['baju', 50000, 3],
      ['sepatu', 125000, 2],
      ['tas', 99000, 1],
      ['jam tangan', 525000, 1],
      ['permen', 2500, 0]
    ];
 *  filterStockAndPrice(input, 60000)
    // return
    [
      ['baju', 50000, 3]
    ]
 */
function filterStockAndPrice(data, money) { 
    let result = []
    for (let i = 0; i < data.length; i++) {
        if (data[i][2] > 0) {
        if (data[i][1] <= money) {
            result.push(data[i])
        }
    }   
    }
    return result
}
// console.log(filterStockAndPrice(products, 60000))

/**
 * function formatOutput akan mengembalikan array nama" produk berdasarkan array input
 * 
 *  let input = [
      ['baju', 50000, 3]
    ]
    formatOutput(data)
    // return
    ['baju']
 */
function formatOutput(data) {
    let result = []
    for (let i = 0; i < data.length; i++) {
        result.push(data[i][0])
    }
    return result
 }

//  console.log (formatOutput(filterStockAndPrice(products, 60000)))
/**
 * function findMatching adalah function utama yang akan mengembalikan array nama" produk yang sesuai dengan uang customer dan stock tersedia.
 *
 * jika input produk tidak diberikan, kembalikan 'invalid input'
 * jika tidak ada produk yang ditemukan, kembalikan 'tidak ada produk yang cocok'
 */
function findMatching(data, money) {
    if (!data || !money) {
        return `invalid input`
    }
    let result = filterStockAndPrice(data, money)
    if (result.length === 0) {
        return `tidak ada produk yang cocok`
    }
    else {
        return formatOutput(result)
    }
    // call filterStockAndPrice
    // call formatOutput
}

console.log(findMatching(products, 100000)); // ['baju', 'tas']
console.log(findMatching(products, 5000)); // 'tidak ada produk yang cocok'
console.log(findMatching()); // 'invalid input'

























```
// // /**
// //  * Buatlah program untuk mengumpulkan pilihan produk mana saja yang sesuai dengan uang customer dan stock tersedia.
// //  */

// //  let products = [
// //   ["baju", 50000, 3],
// //   ["sepatu", 125000, 2],
// //   ["tas", 99000, 1],
// //   ["jam tangan", 525000, 1],
// //   ["permen", 2500, 0],
// // ];

// // /**
// // * function filterStockAndPrice akan mengembalikan array produk yang sudah difilter berdasarkan harga dan stock
// // * 
// // *  let input = [
// //     ['baju', 50000, 3],
// //     ['sepatu', 125000, 2],
// //     ['tas', 99000, 1],
// //     ['jam tangan', 525000, 1],
// //     ['permen', 2500, 0]
// //   ];
// // *  filterStockAndPrice(input, 60000)
// //   // return
// //   [
// //     ['baju', 50000, 3]
// //   ]
// // */
// // function filterStockAndPrice(data, money) { 
// //   const filtered = []

// //   for (let i = 0; i < data.length; i++) {
// //     const product = data[i]
// //     const harga = product[1]
// //     const stock = product[2]
// //     if (harga <= money && stock > 0) {
// //       filtered.push(product)
// //     }
// //   }

// //   return filtered
// // }

// // // console.log(filterStockAndPrice(products, 60000))


// // /**
// // * function formatOutput akan mengembalikan array nama" produk berdasarkan array input
// // * 
// // *  let input = [
// //     ['baju', 50000, 3]
// //   ]
// //   formatOutput(data)
// //   // return
// //   ['baju']
// // */
// // function formatOutput(data) {
// //   const result = []

// //   for (let i = 0; i < data.length; i++) {
// //     let namaProduct = data[i][0]
// //     result.push(namaProduct)
// //   }

// //   return result
// // }

// // // console.log(formatOutput([ [ 'baju', 50000, 3 ] ]))

// // /**
// // * function findMatching adalah function utama yang akan mengembalikan array nama" produk yang sesuai dengan uang customer dan stock tersedia.
// // *
// // * jika input produk tidak diberikan, kembalikan 'invalid input'
// // * jika tidak ada produk yang ditemukan, kembalikan 'tidak ada produk yang cocok'
// // */
// // function findMatching(data, money) {
// //   if (!data) {
// //     return "invalid input"
// //   }
  
// //   const hasilFilter = filterStockAndPrice(data, money)
// //   const hasilFormat  = formatOutput(hasilFilter)

// //   // const hasilFormat  = formatOutput(filterStockAndPrice(data, money))

// //   if (hasilFormat.length === 0) {
// //     return "tidak ada produk yang cocok"
// //   } else {
// //     return hasilFormat
// //   }
// // }

// // console.log(findMatching(products, 100000)); // ['baju', 'tas']
// // console.log(findMatching(products, 5000)); // 'tidak ada produk yang cocok'
// // console.log(findMatching()); // 'invalid input'

```