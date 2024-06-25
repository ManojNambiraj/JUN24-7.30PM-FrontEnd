// DOM -> Document Object Model

// Read
// create
// modify

// let ele1 = document.getElementById("demo")

// console.log(ele1);


// ele.innerText = "hello world"

// ele.innerHTML="<h1>Hello world</h1>"

// ele.style.color = "red"
// ele.style.fontSize = "4em"

// let ele = document.getElementsByClassName("para")

// ele[0].style.color= "blue"
// ele[1].style.color= "blue"

// let ele2 = document.getElementsByTagName("h1")[3].style.color = "red"


// CreateElement - Parent

let newEle = document.createElement("div")

newEle.setAttribute("class", "newHeading")

// Create child element

let childEle = document.createElement("h1")

childEle.innerText="Hello world"

// Rendering - append elements

document.body.append(newEle)

newEle.appendChild(childEle)