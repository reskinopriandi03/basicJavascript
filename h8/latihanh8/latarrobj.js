// 1. Buatlah fungsi program getTotal yang mengembalikan:
// - total harga dari semua barang
const items = [
    {
      name: 'SanSilk',
      category: 'sampo',
      price: 12000
    },
    {
      name: 'LiveBoy',
      category: 'sabun',
      price: 3000
    },
    {
      name: 'Getol',
      category: 'sabun',
      price: 7000
    },
    {
      name: 'Novu',
      category: 'sabun',
      price: 3000
    },
    {
      name: 'Pantin',
      category: 'sampo',
      price: 30000
    }
  ]
  
  function getTotal(list) {
    let totalPrice = 0 
    for(let i = 0; i < list.length; i++){
        totalPrice += list[i].price
      }
    return totalPrice
  }
  
//   console.log(getTotal(items)); // 55000
  
  function getAverage(list) {
  
    
  // 2. Buatlah fungsi program getAverage yang mengembalikan:
  // - rata-rata harga dari semua barang
  let total = getTotal(list)

    
    let average = total / list.length
    return average
    
  }
//   console.log(getAverage(items))

  // console.log(getAverage(items)) // 11000
  
  // 3. Buatlah grouping item sesuai dengan categorynya !
  
  function groupingByCategory(list) {
      let obj = {}
    for(let i = 0; i < list.length; i++){
        if(obj[list[i].category] === undefined){
           obj[list[i].category] = []
            
        }
            obj[list[i].category].push(list[i].name)
    }
    let totalBarang = getTotal(list)
    let totalRata = getAverage(list)
    obj["totalBarang"] = totalBarang
    obj["totalRata"] = totalRata

    return obj
  }
  
  console.log(groupingByCategory(items));
  
  /*
  {
    sampo: ['SanSilk', 'Pantin'],
    sabun: ['LiveBoy', 'Getol', 'Novu'],
    totalHarga: 55000,
    avg: 11000
  }
  */