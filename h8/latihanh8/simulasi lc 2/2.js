function arrangeData(data) {
  // Your code here
  // let arrSplit = []
  for (let i = 0; i < data.historyPacaran.length; i++) {
    let splitResult = []
    let temp = ""

    for (let j = 0; j < data.historyPacaran[i].length; j++) {
      const huruf = data.historyPacaran[i][j]
      if (huruf !== "-") {
        temp += huruf
      }

      if (huruf === "-" || j === data.historyPacaran[i].length - 1) {
        splitResult.push(temp)
        temp = ""
      }
    }
    data.historyPacaran[i] = splitResult
    // arrSplit.push(splitResult)
  }
  // data.historyPacaran = arrSplit
  return data
}

function relationshipReport(data) {
  // Your code here
  // panggil arrangeData
  const hasilArrangeData = arrangeData(data)
  let nama = data.nama
  let totalMantan = 0
  let totalPacar = 0
  let terlama = 0

  for (let i = 0; i < hasilArrangeData.historyPacaran.length; i++) {
    let lamaPacaran = Number(hasilArrangeData.historyPacaran[i][1])
    if (lamaPacaran === 0) {
      totalPacar++
    } else {
      totalMantan++
    }
    
    if (lamaPacaran > terlama) {
      terlama = lamaPacaran
    }
  }
  // let result = []
  // result.push(nama)
  // result.push(`${totalMantan} orang`)
  // result.push(`${totalPacar} orang`)
  // result.push(`${terlama} hari`)

  // result.push(nama, `${totalMantan} orang`, `${totalPacar} orang`, `${terlama} hari`)

  // return result
  return [nama, `${totalMantan} orang`, `${totalPacar} orang`, `${terlama} hari`]
}

console.log(
  relationshipReport({
    nama: "Yumi",
    umur: 23,
    historyPacaran: [
      "Andhika-125",
      "Budiarto-95",
      "Chris-38",
      "Daniel-900",
      "Edwin-15",
      "Frans-365",
    ],
  })
);
// ["Yumi", "6 orang", "0 orang", "900 hari"]

console.log(
  relationshipReport({
    nama: "Yume",
    umur: 25,
    historyPacaran: [
      "Andhika-125",
      "Budiarto-95",
      "Chris-38",
      "Daniel-0",
      "Edwin-0",
    ],
  })
);
// [ 'Yume', '3 orang', '2 orang', '125 hari' ]

console.log(
  relationshipReport({
    nama: "Yumo",
    umur: 22,
    historyPacaran: ["Daniel-0", "Kevin-3", "Edwin-0"],
  })
);
// [ 'Yumo', '1 orang', '2 orang', '3 hari' ]

module.exports = { arrangeData, relationshipReport };
