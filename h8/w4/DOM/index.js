// console.log("Hello from JS")
// console.log(document.getElementById("title").innerHTML)

// const iniTitleDariHtml = document.getElementById("title") // Return Object (element html)

// console.log(iniTitleDariHtml)

// const classH2 = document.getElementsByClassName("classH2") // Return Array of Oject (element html)

// for (let i = 0; i < classH2.length; i++) {
//   console.log(classH2[i].innerHTML)
// }

// console.log(document.getElementsByTagName("h2")) // Return Array of Oject (element html)


const domText = document.getElementById("modify")
// console.log(domText.innerHTML, domText.innerText)
domText.innerText = "Modify DOM"

// console.log(domText.innerText)

const container = document.getElementById("container")
// console.log(container.innerText)
// console.log(container.innerHTML)
const kalimat = container.innerText
container.innerHTML = kalimat + " yang ditambahkan"

// Menanbah attribute class name
container.classList.add("bg-blue")
// console.log(document.getElementById("container"))

// Menambahkan style
container.style = "color: red"

const colors = ["red", "blue", "green", "yellow"]
let index = 0


// const myButton = document.getElementById("my-button").addEventListener("click", function click () {
//   // console.log("you clicked me")
//   // container.style = "background-color: green"
  // if (index === colors.length - 1) {
  //   index = 0
  // } else {
  //   index++
  // }
  // container.style = `background-color: ${colors[index]}`
// })

// const myButton = document.getElementById("my-button")
container.addEventListener("mouseover", changeColor)

function changeColor() {
  if (index === colors.length - 1) {
    index = 0
  } else {
    index++
  }
  container.style = `background-color: ${colors[index]}`
}

const alert = document.querySelector("#btn-alert")
alert.addEventListener("click", clickAlert)

function clickAlert () {
  window.alert("Ini adalah alert")
}

let nameList = []

const prompt = document.getElementById("btn-prompt")
prompt.addEventListener("click", clickPrompt)

function clickPrompt() {
  const value = window.prompt("Masukan nama kamu")
  // console.log(value)
  // domText.innerText = value
  nameList.push(value)
  console.log(nameList)

  document.getElementById("nameList").innerText = `Name List: ${nameList.join(", ")}`
}

const dataList = []

function submitData(event) {
  event.preventDefault() // agar page tidak ter-refresh
  // console.log("Halo")
  let name = document.getElementById("name").value
  let phase = document.querySelector("#phase").value
  const obj = {
    name: name, // Key and value
    phase, // key bay variable name, value by variable value
  }
  dataList.push(obj)
  // console.log(dataList)
  const dataContainer = document.getElementById("data-container")

  /*
    - validasi nama harus diisi
    - validasi phase harus angka
    - data tidak boleh sama dengan data sebelumnya 
  */
  dataContainer.innerHTML += `
    <div style="border: 1px solid black; border-radius: 7px; padding: 10px; margin: 5px">
      <img 
        src="https://www.w3schools.com/images/w3lynx_200.png" 
        width="100px" 
        height="150px"
      >
      <div>
        <p>${name}</p>
        <p>phase: ${phase}</p>
      </div>
    </div>
  `
  
  document.getElementById("name").value = "" // sama kayak yang di bawah
  document.getElementById("phase").value = "" // sama kayak yang di bawah
}
