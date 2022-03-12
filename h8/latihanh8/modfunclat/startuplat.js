function startUpCompetition(startUpList) {
  // Write your code here
  if (!Array.isArray(startUpList)) {
    return 'Invalid Data'
  }
  let output = `Startup unicorn`
  let countAll = 0
  for (let i = 0; i < startUpList.length; i++) {
    let tempCategoryName 
    let tempUnicornName
    let tempSplitArray
    let countUnicorn = 0
    for (let j = 0; j < startUpList[i].length; j++) {
      if (j===0) {
        tempCategoryName = startUpList[i][0]//catefory setiap array pertama
      } else {
        tempSplitArray = startUpList[i][j].split('-')//memisahkan array berdasarkan tanda '-' agar bisa ambil 2 angka terakhir untuk di jadikan number
        if (tempSplitArray[1]>=14) { 
          if (!tempUnicornName) {//kalau belum ada unicorn name yg masuk tambahin string tanpa koma
            tempUnicornName = `${tempSplitArray[0]}`
          } else {//kalau sudah ada unicorn name sblmnya tambahkan ',' koma baru nama unicornnya
            tempUnicornName += `, ${tempSplitArray[0]}`
          }
          countUnicorn += 1 // kalau lbih = 14 maka jumlah unicorn d tambah
        }
      }           
    }
    if (countUnicorn>0) {
      output += `\n${tempCategoryName}, ${countUnicorn} startup (${tempUnicornName})`
    } else {
      output += `\n${tempCategoryName}, (tidak ada startup unicorn)`
    }
    countAll += countUnicorn
  }
  output += `\nTotal ${countAll} startup unicorn`
  console.log('===============================================')//hapus kalau tidak perlu, cuma untuk pembeda
  return output
}

console.log(startUpCompetition())
// 'Invalid Data'

let indonesia = [
  ['Ecommerce', 'Tikipidia-17', 'Bikilipik-08', 'Bhinniki-07', 'BleBle.cim-15'],
  ['Tourism', 'Triviliki-16', 'Tikit.cim-12'],
  ['Healthtech', 'Hilidic-15'],
  ['Agrotech', 'Siyirbix-17', 'TikingSiyir.ci-16']
]
console.log(startUpCompetition(indonesia))
// Startup unicorn
// Ecommerce, 2 startup (Tikipidia, BleBle.cim)
// Tourism, 1 startup (Triviliki)
// Healthtech, 1 startup (Hilidic)
// Agrotech, 2 startup (Siyirbix, TikingSiyir.ci)
// Total 6 startup unicorn

let singapore = [
  ['Ecommerce', 'Shipee-18', 'Lizidi-19'],
  ['Tourism', 'HalalTrip-07', 'verylocaltrip.com-12'],
  ['Healthtech', 'Doctor Anywhere-14', 'Healint-13'],
  ['Agrotech', 'SINGROW-19', 'Simplyfresh-09', 'eFeedLink-18']
]
console.log(startUpCompetition(singapore))
// Startup unicorn
// Ecommerce, 2 startup (Shipee, Lizidi)   
// Tourism (tidak ada startup unicorn)
// Healthtech, 1 startup (Doctor Anywhere) 
// Agrotech, 2 startup (SINGROW, eFeedLink)
// Total 5 startup unicorn

let malaysia = [
  ['Ecommerce', 'Dropee-17'],
  ['Healthtech', 'BookDoc-18'],
  ['Agrotech', 'dahmakan-19'],
]
console.log(startUpCompetition(malaysia))
// Startup unicorn
// Ecommerce, 1 startup (Dropee)
// Healthtech, 1 startup (BookDoc)
// Agrotech, 1 startup (dahmakan)
// Total 3 startup unicorn```