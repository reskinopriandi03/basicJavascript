function summaryPengunjung(input) {
  // Your code here
  const result = []

  // let preData = []

  for (let i = 0; i < input[0].length; i++) {
    // result.push(`${input[0][i]} ${input[1][i]} - ${input[2][i] < 10 ? "0" + input[2][i] : input[2][i]}/${input[3][i][0]+input[3][i][1]+input[3][i][2]}/${input[4][i]} - ${2022 - input[4][i]} Tahun`)
    let firsName = input[0][i]
    let lastName = input[1][i]
    let date = input[2][i]
    let month = input[3][i][0] + input[3][i][1] + input[3][i][2]
    let year = input[4][i]
    let age = 2022 - year

    if (date < 10) {
      date = "0" + date
    }

    // preData.push([firsName, lastName, `${date}/${month}/${year}`, age])

    let str = `${firsName} ${lastName} - ${date}/${month}/${year} - ${age} Tahun`
    result.push(str)
  }

  // console.log(preData)

  return result
}

console.log(
  summaryPengunjung([
    ["Acong", "Djoko", "Sitorus"],
    ["Budiman", "Abimantra", "Prayitno"],
    [13, 24, 22],
    ["Januari", "Maret", "Mei"],
    [1980, 1965, 1990],
  ])
);
/*
[
  'Acong Budiman - 13/Jan/1980 - 41 Tahun',  
  'Djoko Abimantra - 24/Mar/1965 - 56 Tahun',
  'Sitorus Prayitno - 22/Mei/1990 - 31 Tahun'
]
*/

console.log(
  summaryPengunjung([
    ["Kian", "Walang", "Alexander", "Budi"],
    ["Santang", "Sungsang", "Geraham", "Pekerti"],
    [18, 1, 7, 20],
    ["Desember", "April", "Januari", "Juli"],
    [1980, 1965, 1990, 1957],
  ])
);
/*
[
  'Kian Santang - 18/Des/1980 - 41 Tahun',
  'Walang Sungsang - 01/Apr/1965 - 56 Tahun',
  'Alexander Geraham - 07/Jan/1990 - 31 Tahun',
  'Budi Pekerti - 20/Jul/1957 - 64 Tahun'
]
*/

module.exports = summaryPengunjung;
