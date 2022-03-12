// ESTIMATE = 20 MIN

// Menentukan angka terkecil
// output => 1

function lowest(arr) {
    let angkaTerkecil = arr[0][0]
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] < angkaTerkecil ) {
                angkaTerkecil = arr[i][j]
            }
        }
    }
    return angkaTerkecil
}
// Menentukan angka terbesar
// output => 99
function highest(arr) {
    let angkaTerbesar = arr[0][0]
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] > angkaTerbesar ) {
                angkaTerbesar = arr[i][j]
            }
        }
    }
    return angkaTerbesar

}

// Menentukan rata-rata
// output => 42.4
function average(arr) {

    let totalNilai = 0
    let tampungTotal = 0
    for (let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr[i].length; j++){
            totalNilai += arr[i][j]
            // console.log(arr[i][j])
            tampungTotal ++
        }
    }
    let totalAverage = totalNilai / tampungTotal

    return totalAverage

}

// let angka = [5, 89, 32, 77, 98, 3, 9, 10, 2, 99];

//case 2
let angka = [
    [5, 89, 32],
    [77, 1, 98],
    [3, 9, 10],
    [2, 99, 72]
];

// let terkecil = angka[0][0]

// simpan angka terkecil sementara dengan angka pertama di dalam array
// kemudian bandingkan dengan semua angka yang ada di dalam array
// apabila angka yang sedang di akses lebih kecil dari angka terkecil sementara maka kita ganti isi angka terkecil sementara menjadi angka yang sedang di akses

//panggil function beserta parameternya disini
console.log(lowest(angka));
console.log(highest(angka));
console.log(average(angka));