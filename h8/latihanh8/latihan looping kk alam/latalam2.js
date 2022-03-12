
// // ======== GENERATE GRADE ==============
// // menerima input array of objek dari data students
// // Berfungsi menambahkan properti grade berdasarkan score masing2 student
// // grade A => score 9 - 10
// // grade B => score 7.5 - 8.9
// // grade C => score 6 - 7.4
// // grade D => score 5 - 5.9
// // grade E => score < 5
// /**
//  * contoh input: 
//  * [
//     {name: 'Budi', score: 8.4},
//     {name: 'Dani', score: 7.2},
//     {name: 'Sari', score: 9.4},
//     {name: 'Acong', score: 3.4},
//     {name: 'Rose', score: 6.4}
//    ]

//    output: 
//    [
//     { name: 'Budi', score: 8.4, grade: 'B' }, 
//     { name: 'Dani', score: 7.2, grade: 'C' }, 
//     { name: 'Sari', score: 9.4, grade: 'A' }, 
//     { name: 'Acong', score: 3.4, grade: 'E' },
//     { name: 'Rose', score: 6.4, grade: 'C' }
//    ]
//  */ 
//    function generateGrade(data) {
//     // Your code here
//     let output = []
//     for(let i = 0; i < data.length; i++){
//         let obj = {}
//         // console.log(data[i].score)
//         let grade = ""
//         if(data[i].score >= 9 && data[i].score <= 10){
//             grade = "A"
//         } else if(data[i].score >= 7.5 && data[i].score <= 8.9){
//             grade = "B"
//         } else if(data[i].score >= 6 && data[i].score <= 7.4){
//             grade = "C"
//         } else if(data[i].score >= 5 && data[i].score <= 5.9){
//             grade = "D"
//         } else if(data[i].score >= 0 && data[i].score <= 4.9){
//             grade = "E"
//         } 
//         obj["name"] = data[i].name
//         obj["score"] = data[i].score
//         obj["grade"] = grade
//         output.push(obj)
//     }
    



//    return output
// }


// // ========= HIGEST SCORE ===========
// // menerima input array of objek dari data students
// // berfungsi mencari nilai tertinggi dari students yang ada
// /**
//  * contoh input: 
//  * [
//     { name: 'Budi', score: 8.4, grade: 'B' }, 
//     { name: 'Dani', score: 7.2, grade: 'C' }, 
//     { name: 'Sari', score: 9.4, grade: 'A' }, 
//     { name: 'Acong', score: 3.4, grade: 'E' },
//     { name: 'Rose', score: 6.4, grade: 'C' }
//    ]

//    output: 
//    { name: 'Sari', score: 9.4, grade: 'A' }
//  */
// function highestScore(data) {
//     // Your code here
    
//     let output2 = {}
//     for(let i = 0; i < data.length; i++){
//         let firsCompare = data[0].score
//         // console.log(firsCompare)
//         if(firsCompare < data[i].score){
//             firsCompare = data[i].score
//             output2 = data[i]
//         }
//     }
//     return output2   
// }

// // ======== GROUPING STUDENTS =======
// // Fungsi utama yang akan mengelompokkan students berdasarkan grade nya, beserta menampilkan student dengan nilai tertinggi
// // Menerima input array of object dari data students
// /**
//  * contoh input:
//  * [
//     { name: 'Budi', score: 8.4, grade: 'B' }, 
//     { name: 'Dani', score: 7.2, grade: 'C' }, 
//     { name: 'Sari', score: 9.4, grade: 'A' }, 
//     { name: 'Acong', score: 3.4, grade: 'E' },
//     { name: 'Rose', score: 6.4, grade: 'C' }
//    ]
//    output:
//    {
//     'GRADE B': [ 'Budi' ],
//     'GRADE C': [ 'Dani', 'Rose' ],
//     'GRADE A': [ 'Sari' ],
//     'GRADE E': [ 'Acong' ],
//     higestScore: { name: 'Sari', score: 9.4, grade: 'A' }
//    }
//  */

// function groupingStudents(data) {
//     // Panggil generateGrade disini
//     // Panggil higestScore disini
//     let hasilGenerateGrade = generateGrade(data)
// //  console.log(hasilGenerateGrade) 
//     let hasilHigestScore = highestScore(hasilGenerateGrade)
//     let output3 = {}
//     let arrAwal = []
//     for (let a = 0; a < hasilGenerateGrade.length; a++){
//         if(output3[`GRADE ${hasilGenerateGrade[a].grade}`] === undefined){
//             output3[`GRADE ${hasilGenerateGrade[a].grade}`] = []
//         }
//         output3[`GRADE ${hasilGenerateGrade[a].grade}`].push(hasilGenerateGrade[a].name)
//     }
//     output3["higestScore"] = hasilHigestScore



//     return output3
// }

// let students = [
//     {name: 'Budi', score: 8.4},
//     {name: 'Dani', score: 7.2},
//     {name: 'Sari', score: 9.4},
//     {name: 'Acong', score: 3.4},
//     {name: 'Rose', score: 6.4},
//     {name: 'Anggi', score: 9.0},
//     {name: 'James', score: 9.9},
//     {name: 'Rendy', score: 6.5},
//     {name: 'Giri', score: 4.4}
// ]

// console.log(groupingStudents(students));








































































































































// ======== GENERATE GRADE ==============
// menerima input array of objek dari data students
// Berfungsi menambahkan properti grade berdasarkan score masing2 student
// grade A => score 9 - 10
// grade B => score 7.5 - 8.9
// grade C => score 6 - 7.4
// grade D => score 5 - 5.9
// grade E => score < 5
/**
 * contoh input: 
 * [
    {name: 'Budi', score: 8.4},
    {name: 'Dani', score: 7.2},
    {name: 'Sari', score: 9.4},
    {name: 'Acong', score: 3.4},
    {name: 'Rose', score: 6.4}
   ]

   output: 
   [
    { name: 'Budi', score: 8.4, grade: 'B' }, 
    { name: 'Dani', score: 7.2, grade: 'C' }, 
    { name: 'Sari', score: 9.4, grade: 'A' }, 
    { name: 'Acong', score: 3.4, grade: 'E' },
    { name: 'Rose', score: 6.4, grade: 'C' }
   ]
 */ 
function generateGrade(data) {
    // Your code here
    let output = []
    for(let i = 0; i < data.length; i++){
        let obj = {}
        let grade = ""
        // console.log(data[i].score)
        let dataScore = data[i].score
        if(dataScore >= 9 && dataScore <= 10){
            grade = "A"
        } else if (dataScore >= 7.5 && dataScore <= 8.9){
            grade = "B"
        }else if (dataScore >= 6 && dataScore <= 7.4){
            grade = "C"
        } else if (dataScore >= 5 && dataScore <= 5.9){
            grade = "D"
        } else if(dataScore >= 0 && dataScore <= 4.9){
            grade = "E"
        }
        obj["name"] = data[i].name
        obj["score"] = data[i].score
        obj["grade"] = grade
        output.push(obj)    
    }
    return output
}


// ========= HIGEST SCORE ===========
// menerima input array of objek dari data students
// berfungsi mencari nilai tertinggi dari students yang ada
/**
 * contoh input: 
 * [
    { name: 'Budi', score: 8.4, grade: 'B' }, 
    { name: 'Dani', score: 7.2, grade: 'C' }, 
    { name: 'Sari', score: 9.4, grade: 'A' }, 
    { name: 'Acong', score: 3.4, grade: 'E' },
    { name: 'Rose', score: 6.4, grade: 'C' }
   ]

   output: 
   { name: 'Sari', score: 9.4, grade: 'A' }
 */
function highestScore(data) {
    // Your code here
    let obj2 = {}
    for(let a = 0; a < data.length; a++){
        let maxData = data[0].score
        // console.log(maxData)
       if(maxData < data[a].score){
           maxData = data[a].score
            obj2 = data[a]
       }

    }
    return obj2
}

// ======== GROUPING STUDENTS =======
// Fungsi utama yang akan mengelompokkan students berdasarkan grade nya, beserta menampilkan student dengan nilai tertinggi
// Menerima input array of object dari data students
/**
 * contoh input:
 * [
    { name: 'Budi', score: 8.4, grade: 'B' }, 
    { name: 'Dani', score: 7.2, grade: 'C' }, 
    { name: 'Sari', score: 9.4, grade: 'A' }, 
    { name: 'Acong', score: 3.4, grade: 'E' },
    { name: 'Rose', score: 6.4, grade: 'C' }
   ]
   output:
   {
    'GRADE B': [ 'Budi' ],
    'GRADE C': [ 'Dani', 'Rose' ],
    'GRADE A': [ 'Sari' ],
    'GRADE E': [ 'Acong' ],
    higestScore: { name: 'Sari', score: 9.4, grade: 'A' }
   }
 */

function groupingStudents(data) {
    // Panggil generateGrade disini
    // Panggil higestScore disini
    let resultGenerate = generateGrade(data)
// console.log(resultGenerate)
    let resultHighest = highestScore(resultGenerate)
    let output3 = {}
    for(let i = 0; i < resultGenerate.length; i++){
        if(output3[`GRADE ${resultGenerate[i].grade}`] === undefined){
            output3[`GRADE ${resultGenerate[i].grade}`] = []
        }
        output3[`GRADE ${resultGenerate[i].grade}`].push(resultGenerate[i].name)
    }
    output3["higestScore"] = resultHighest
    return output3
}

let students = [
    {name: 'Budi', score: 8.4},
    {name: 'Dani', score: 7.2},
    {name: 'Sari', score: 9.4},
    {name: 'Acong', score: 3.4},
    {name: 'Rose', score: 6.4},
    {name: 'Anggi', score: 9.0},
    {name: 'James', score: 9.9},
    {name: 'Rendy', score: 6.5},
    {name: 'Giri', score: 4.4}
]

console.log(groupingStudents(students));


