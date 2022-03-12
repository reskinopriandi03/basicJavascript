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
  let result = [];

  for (let i = 0; i < data.length; i++) {
    let perItem = data[i]; // ['baju', 50000, 3], dst

    let perNama = perItem[0]; // baju
    let perHarga = perItem[1]; // 50000
    let perStock = perItem[2]; // 3

    if (perHarga <= money && perStock > 0) {
      result.push(perItem);
    }
  }

  return result;
}

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
  let result = [];

  for(let i = 0; i < data.length; i++) {
    let perItem = data[i]; // ['baju', 50000, 3], dst

    let perNama = perItem[0]; // baju
    let perHarga = perItem[1]; // 50000
    let perStock = perItem[2]; // 3

    result.push(perNama);
  }

  return result;
}

/**
 * function findMatching adalah function utama yang akan mengembalikan array nama" produk yang sesuai dengan uang customer dan stock tersedia.
 *
 * jika input produk tidak diberikan, kembalikan 'invalid input'
 * jika tidak ada produk yang ditemukan, kembalikan 'tidak ada produk yang cocok'
 */
function findMatching(data, money) {
  let result;

  if(data === undefined && money === undefined) {
    result = 'invalid input';
    return result;
  }
  
  // call filterStockAndPrice
  let filtered = filterStockAndPrice(data, money);
  if(filtered.length === 0) {
    result = 'tidak ada produk yang cocok';
    return result;
  }

  // call formatOutput
  let formatted = formatOutput(filtered);
  result = formatted;
  return result;
}

console.log(findMatching(products, 100000)); // ['baju', 'tas']
console.log(findMatching(products, 5000)); // 'tidak ada produk yang cocok'
console.log(findMatching()); // 'invalid input'