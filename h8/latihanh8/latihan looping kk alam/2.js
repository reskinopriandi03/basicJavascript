// Pembelajaran di hacktiv dilaksanakan selama 5 hari dari senin hingga jumat, setiap harinya diadakan lecture dari jam 9 sampai 11 dan jam 1 hingga 3. 
// Buatlah sebuah program untuk menentukan pada hari tersebut apakah ada lecture atau tidak dan pada waktu yang diinputkan oleh user apakah ada lecture atau tidak?

let hari = "jum'at"
let jam =  "7"

let result = ""

if(hari === "senin" || hari === "selasa" || hari === "rabu" || hari === "kamis" || hari === "jum'at" ){
    result = hari
    if(jam === "9" || jam === "10" || jam === "11" || jam === "1" || jam === "2" || jam === "3"){
        result = `di hari ${hari} jam ${jam}  ada lecture`
    } else {
        result = `di hari ${hari} jam ${jam} tidak ada lecture`
        
    }
}


console.log(result)



//contoh input
// var hari = 'senin'
// var jam = 4

// output:
// "di hari senin jam 4 tidak ada lecture"

//contoh input2
// var hari = 'selasa'
// var jam = 9

// output
// "di hari selasa jam 9 ada lecture"