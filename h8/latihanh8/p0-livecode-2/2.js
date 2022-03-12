function filterReceipt(ingredients) {
  let receipts = [
    ["Dimsum", "Udang", "Ayam", "Kepiting"],
    ["Ayam Geprek", "Ayam", "Sambal", "Bawang"],
    ["Chicken Katsu", "Ayam", "Tepung Roti", "Terigu"],
    ["Kebab", "Daging Sapi", "Tortilla"],
    ["Bakso", "Daging Sapi", "Terigu"],
  ];
  // write your code here
  let result = [];
  // looping ingredients mendapatkan permasing2 nama makanan
  for (let i = 0; i < ingredients.length; i++) {
    let namaMakanan = ingredients[i]; // "Chicken Katsu", "Kebab", "Bakso" => nama makanan yg dicari

    // cari di array receipts, ada atau engga nama makanan yg dicari, looping receipts, kemudian dapatkan index ke0 nya

    for (let j = 0; j < receipts.length; j++) {
      let namaResep = receipts[j][0];

      // kita bandingkan dengan nama menu yg dicari
      if (namaResep === namaMakanan) {
        // "Chicken Katsu" === "Chicken Katsu"
        // ambil keseluruhan resep (receipts[j])
        result.push(receipts[j]);
      }
    }
  }

  return result;
}
// console.log(filterReceipt(["Chicken Katsu", "Kebab", "Bakso"]));
// console.log(filterReceipt(["Mie", "Pangsit"]));
/*
[
  [ "Chicken Katsu", "Ayam", "Tepung Roti", "Terigu" ],
  [ "Kebab", "Daging Sapi", "Tortilla" ],
  [ "Bakso", "Daging Sapi", "Terigu" ]
]
*/

function usersCanCook(users) {
  // write your code here
  // panggil function filterReceipt

  if (users === undefined) {
    return "Invalid Data!";
  }

  let userMenu = users.menu;

  // mengubah string menjadi array, supaya menu2 yg dicari bisa kita lempar ke function sebelumnya (filterReceipt)

  // loop Chicken Katsu-Kebab-Bakso
  let arr = [];
  let str = ""; // Chicken
  for (let i = 0; i < userMenu.length; i++) {
    let character = userMenu[i]; // C, h, i, c, k, dst...

    if (character === "-") {
      arr.push(str);
      str = "";
    } else if (i === userMenu.length - 1) {
      str += character;
      arr.push(str);
      str = "";
    } else {
      str += character;
    }
  }

  let result = filterReceipt(arr);
  if (result.length === 0) {
    return "Menu not found";
  }

  return result;
}

// TEST CASES
let users1 = {
  name: "Fajrin",
  resto: "Fajrin Food",
  menu: "Chicken Katsu-Kebab-Bakso",
};
console.log(usersCanCook(users1));
/*
[
  [ 'Chicken Katsu', 'Ayam', 'Tepung Roti', 'Terigu' ],
  [ 'Kebab', 'Daging Sapi', 'Tortilla' ],
  [ 'Bakso', 'Daging Sapi', 'Terigu' ]
]
*/

let users2 = {
  name: "Ihsan",
  resto: "Ihsan Resto",
  menu: "Dimsum-Ayam Geprek-Kopi",
};
console.log(usersCanCook(users2));
/*
[
  [ 'Dimsum', 'Udang', 'Ayam', 'Kepiting' ],
  [ 'Ayam Geprek', 'Ayam', 'Sambal', 'Bawang' ]
]
*/

let users3 = {
  name: "Rizka",
  resto: "Rizka Cafe",
  menu: "Mie-Pangsit",
};
console.log(usersCanCook(users3));
// "Menu not found"

console.log(usersCanCook());
// "Invalid Data!"

module.exports = {
  filterReceipt,
  usersCanCook,
};
