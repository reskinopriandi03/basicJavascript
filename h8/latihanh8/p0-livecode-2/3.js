function getArcadeResult(history) {
  let arcadeTickets = {
    "Circus Ball Drop": 200,
    "Lucky Chicken": 100,
    "Street Basketball": 50,
    "Gold Rush": 20,
  };
  // write your code here
  let result = {};
  let totalTicket = 0;
  let gameReport = {};
  // looping historynya
  for (let i = 0; i < history.length; i++) {
    let gameTitle = history[i];
    let ticket = arcadeTickets[gameTitle]; // arcadeTickets["Circus Ball Drop"] => 200
    totalTicket += ticket;

    // kita cek di variable gameReport, apakah sudah ada propertyName / keyName gameTitle (Circus Ball Drop), jika belum ada, buatin dulu propertyName nya dengan initial value => 0
    if (gameReport[gameTitle] === undefined) {
      // true
      gameReport[gameTitle] = 0; // counter
    }

    // setiap kali looping, tambahkan counter utk game tersebut di gameReport
    gameReport[gameTitle] += 1;
  }

  result.totalTicket = totalTicket;
  result.gameReport = gameReport;
  return result;
}

function getPrizes(ticket) {
  let listPrize = [
    [200, "Rautan", "Pensil", "Penghapus"],
    [500, "Tempat Pensil", "Celengan", "Buku Tulis", "Penjepit Rambut"],
    [1000, "Boneka", "Tas"],
  ];
  // write your code here
  let result = [];

  // loop => listPrize
  for (let i = 0; i < listPrize.length; i++) {
    const element = listPrize[i]; // [200, "Rautan", "Pensil", "Penghapus"],
    let harga = element[0]; // harga => 200

    for (let j = 1; j < element.length; j++) {
      let hadiah = element[j]; // "Rautan", "Pensil", "Penghapus"
      // jika jumlah ticket yg dipunya pengunjung lebih besar samadengan harga dari hadiah tsb
      if (ticket >= harga) {
        // maka hadiah tsb dimasukan ke arr result
        result.push(hadiah);

        // dan jml tiket pengunjung dikurangi dengan harga
        ticket = ticket - harga; // 1900 - 200 => 1700
      }
      // console.log(hadiah);
    }
    // console.log(harga);
  }

  return result;
}

function gamezone(user) {
  // panggil getArcadeResult dan getPrizes disini

  if (!user) {
    return "Tidak ada pemain yang bermain";
  }

  let result = {};
  let histories = user.histories;
  let arcadeResult = getArcadeResult(histories);
  if (!arcadeResult.totalTicket) {
    // totalTicket => NaN,
    return "Terdapat permainan yang tidak tersedia di gamezone";
  }

  let prizes = getPrizes(arcadeResult.totalTicket);
  /* 
    {
  *  totalTicket: 1900,
  *  gameReport: {
  *    'Circus Ball Drop': 6,
  *    'Lucky Chicken': 4,
  *    'Street Basketball': 4,
  *    'Gold Rush': 5
  *  }
  * }
  */
  result.name = user.name;
  result.gameReport = arcadeResult.gameReport;
  result.prizes = prizes;

  return result;
}

// console.log(
//   gamezone({
//     name: "Ihsan",
//     histories: [
//       "Circus Ball Drop",
//       "Lucky Chicken",
//       "Street Basketball",
//       "Circus Ball Drop",
//       "Lucky Chicken",
//       "Street Basketball",
//       "Gold Rush",
//       "Gold Rush",
//       "Gold Rush",
//       "Circus Ball Drop",
//       "Lucky Chicken",
//       "Lucky Chicken",
//       "Circus Ball Drop",
//       "Street Basketball",
//       "Street Basketball",
//       "Gold Rush",
//       "Gold Rush",
//       "Circus Ball Drop",
//       "Circus Ball Drop",
//     ],
//   })
// );
/**
 * {
  name: 'Ihsan',
  gameReport: {
    'Circus Ball Drop': 6,
    'Lucky Chicken': 4,
    'Street Basketball': 4,
    'Gold Rush': 5
  },
  prizes: [ 'Rautan', 'Pensil', 'Penghapus', 'Tempat Pensil', 'Celengan' ]
}
 */

// console.log(
//   gamezone({
//     name: "Kosasih",
//     histories: [
//       "Circus Ball Drop",
//       "Circus Ball Drop",
//       "Street Basketball",
//       "Circus Ball Drop",
//       "Lucky Chicken",
//       "Street Basketball",
//       "Gold Rush",
//       "Gold Rush",
//       "Gold Rush",
//       "Circus Ball Drop",
//       "Lucky Chicken",
//       "Lucky Chicken",
//       "Circus Ball Drop",
//       "Street Basketball",
//       "Street Basketball",
//       "Street Basketball",
//       "Gold Rush",
//       "Circus Ball Drop",
//       "Circus Ball Drop",
//       "Gold Rush",
//       "Gold Rush",
//       "Lucky Chicken",
//       "Lucky Chicken",
//       "Street Basketball",
//       "Street Basketball",
//       "Circus Ball Drop",
//       "Circus Ball Drop",
//       "Circus Ball Drop",
//       "Circus Ball Drop",
//     ],
//   })
// );
/**
 * {
    name: 'Kosasih',
    gameReport: {
      'Circus Ball Drop': 11,
      'Street Basketball': 7,
      'Lucky Chicken': 5,
      'Gold Rush': 6
    },
    prizes: [
      'Rautan',
      'Pensil',
      'Penghapus',
      'Tempat Pensil',
      'Celengan',
      'Buku Tulis',
      'Penjepit Rambut'
    ]
  }
 */

// console.log(
//   gamezone({
//     name: "Minnie",
//     histories: ["Circus Ball Drop", "Circus Ball Drop"],
//   })
// );

/**
 * {
  name: 'Minnie',
  gameReport: { 'Circus Ball Drop': 2 },
  prizes: [ 'Rautan', 'Pensil' ]
}
 */

console.log(
  gamezone({
    name: "Marry",
    histories: [
      "Circus Ball Drop",
      "Circus Ball Drop",
      "Race to Witch Mountain",
    ],
  })
);
// Terdapat permainan yang tidak tersedia di gamezone

console.log(gamezone());
// Tidak ada pemain yang bermain

module.exports = {
  getArcadeResult,
  getPrizes,
  gamezone,
};
