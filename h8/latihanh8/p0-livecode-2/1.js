function getStartUp(arr) {
  // Write your code here
  let result = [];
  let startUpBidangE = ""; // lengthnya 0
  let startUpBidangT = "";
  let startUpBidangH = "";
  let startUpBidangA = "";

  // Cari startup berdasarkan bidang
  // 'Bikilipik-E' => dapatkan karakter terakhir dari string
  for (let i = 0; i < arr.length; i++) {
    let startup = arr[i];
    let lastChar = startup[startup.length - 1];
    let strNamaStartup = "";

    // looping string, untuk mendapatkan nama startupnnya saja, caranya dengan looping string dari 0 sampai sebelum 2 karakter terakhir
    for (let j = 0; j < startup.length - 2; j++) {
      strNamaStartup += startup[j];
    }
    // console.log(strNamaStartup);

    // pisahkan sesuai bidangnya
    // ganti nilai startup jika ada yg namanya lebih panjang
    if (lastChar === "E") {
      if (strNamaStartup.length > startUpBidangE.length) {
        // 9 > 0
        startUpBidangE = strNamaStartup;
      }
    } else if (lastChar === "T") {
      if (strNamaStartup.length > startUpBidangT.length) {
        startUpBidangT = strNamaStartup;
      }
    } else if (lastChar === "H") {
      if (strNamaStartup.length > startUpBidangH.length) {
        startUpBidangH = strNamaStartup;
      }
    } else if (lastChar === "A") {
      if (strNamaStartup.length > startUpBidangA.length) {
        startUpBidangA = strNamaStartup;
      }
    }
  }

  result.push(startUpBidangE);
  result.push(startUpBidangT);
  result.push(startUpBidangH);
  result.push(startUpBidangA);
  return result;
}

// AKSES KARAKTER TERAKHIR DARI SEBUAH STRING
// let str = "Tikit.cim-T";
// console.log(str.length);
// var lastChar = str[str.length - 1];
// console.log(lastChar);

//Test Case
console.log(
  getStartUp(["Bikilipik-E", "Tikit.cim-T", "Ilidiktir-H", "TiniHib-A"])
);
// [ 'Bikilipik', 'Tikit.cim', 'Ilidiktir', 'TiniHib' ]

console.log(
  getStartUp([
    "Lizidi-E",
    "Iirbnb-T",
    "TikingSiyir.ci-A",
    "PriSihit-H",
    "DiktirSihit-H",
    "eFishiry-A",
    "babaAli-E",
    "eMeat-A",
  ])
);
// [ 'babaAli', 'Iirbnb', 'DiktirSihit', 'TikingSiyir.ci' ]

console.log(
  getStartUp([
    "Tikipidia-E",
    "Triviliki-T",
    "Hilidic-H",
    "Siyirbix-A",
    "Shipee-E",
    "Bhinniki-E",
    "BleBle.cim-E",
    "PigiPigi-T",
    "tomazo-A",
  ])
);
// [ 'BleBle.cim', 'Triviliki', 'Hilidic', 'Siyirbix' ]

console.log(
  getStartUp([
    "FoGoods-A",
    "FoMarts-E",
    "Lazora-E",
    "eFruit-A",
    "FoHealth-H",
    "FoTravel-T",
    "HaiDoc-H",
    "ticket.net-T",
  ])
);
// [ 'FoMarts', 'ticket.net', 'FoHealth', 'FoGoods' ]

module.exports = getStartUp;
