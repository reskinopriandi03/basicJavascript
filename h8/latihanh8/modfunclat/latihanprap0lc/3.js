/**
 * Footbal match
 * =====================
 *
 * Kita mendapat tabel pertandingan sepak bola berupa array multidimensi (cek input dibawah), kita ditugaskan untuk mengolah data menjadi data pertandingan dan total poin per teamnya. untuk poin kemenangan akan dapat 3, draw akan dapat 1 , dan lose 0.
 * buatlah function generateTeamStatus dengan input dan output seperti di contoh !
 */

const input = [
  ["Team 1", "Team 2", "Score"],
  ["juventus", "MU", "0-3"],
  ["chelsea", "MU", "1-1"], // i = 2
  ["juventus", "chelsea", "2-0"], // i = 3
  //    0          1        2
];

function split(str) {
  const result = [];

  let temp = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== "-") {
      temp += str[i];
    }
    if (str[i] === "-" || i === str.length - 1) {
      result.push(Number(temp));
      temp = "";
    }
  }

  return result;
}

function generateTeamStatus(matchTable) {
  //code here
  if (matchTable === undefined) {
    return "Invalid Data";
  }

  let result = {};

  for (let i = 1; i < matchTable.length; i++) {
    const team1 = matchTable[i][0];
    const team2 = matchTable[i][1];
    const score = matchTable[i][2];
    const scoreSplit = split(score);

    if (result[team1] === undefined) {
      result[team1] = {
        match: [],
        totalPoin: 0,
      };
    }

    if (result[team2] === undefined) {
      result[team2] = {
        match: [],
        totalPoin: 0,
      };
    }

    if (scoreSplit[0] === scoreSplit[1]) {
      result[team1].match.push([team2, "DRAW"]);
      result[team1].totalPoin += 1;
      result[team2].match.push([team1, "DRAW"]);
      result[team2].totalPoin += 1;
    } else if (scoreSplit[0] > scoreSplit[1]) {
      result[team1].match.push([team2, "WIN"]);
      result[team1].totalPoin += 3;
      result[team2].match.push([team1, "LOSE"]);
    } else if (scoreSplit[0] < scoreSplit[1]) {
      result[team1].match.push([team2, "LOSE"]);
      result[team2].match.push([team1, "WIN"]);
      result[team2].totalPoin += 3;
    }
  }

  // console.log(JSON.stringify(result, null, 2));
  return result;
}

// console.log(generateTeamStatus());
console.log(generateTeamStatus(input));
// nanti outputnya begini ya:
// {
//   juventus: {
//     match: [
//       ["MU", "LOSE"],
//       ["chelsea", "WIN"],
//     ],
//     totalPoin: 3,
//   },
//   MU: {
//     match: [
//       ["juventus", "WIN"],
//       ["chelsea", "DRAW"],
//     ],
//     totalPoin: 4,
//   },
//   chelsea: {
//     match: [
//       ["MU", "DRAW"],
//       ["juventus", "LOSE"],
//     ],
//     totalPoin: 1,
//   },
// };
