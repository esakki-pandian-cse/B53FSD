// getting and setting the elements and colors needed
const boxes = document.querySelector(".boxes");
const colors = [
  "aqua",
  "red",
  "blueviolet",
  "charreuse",
  "coral",
  "gold",
  "green",
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


// building the boxes for the game 
