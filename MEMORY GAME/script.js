// getting and setting the elements and colors needed
const boxes = document.querySelector(".boxes");
const colors = [
  "aqua",
  "red",
  "blueviolet",
  "chartreuse",
  "coral",
  "gold",
  "maroon",
  "hotpink",
];
const colorList = [...colors,...colors]
// console.log(colorList);
const boxLength = colorList.length;
// console.log(boxLength);

// Initializing the main elements of the game state 
let revealCount = 0;
// ethana thadava flip pannirukom apdingura count
let activeBox = null;
// entha boxah currentah click pandrengurathuthan 
let waitingTime = false;
// box automaticah thirumpurathu than waiting time

// function to display the boxes in the webpage
function buildBoxes(color){
  const element = document.createElement("div");
  element.classList.add("box");
  element.setAttribute("data-color", color);

// adding event listeners for click event
element.addEventListener("click",()=>{
  if(waitingTime){
    return
  }
  element.style.backgroundColor = color
})


  return element;
} 

// building the boxes for the game 
for(let i = 0; i<boxLength; i++){
  // this is the place where the colors are randomly displayed 
  const randomIndex =  Math.floor(Math.random() * colorList.length);
  const color = colorList[randomIndex];
  const box = buildBoxes(color);

// using splice method to avoid 3 repeated calls 
  colorList.splice(randomIndex,1);

//  console.log(color);
boxes.append(box);
}