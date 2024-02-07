// const elememt = document.querySelector("h1");
// elememt.addEventListener("click", (e) => {
//   document.querySelector("span").innerText = `cordinates of X = ${e.pageX} and Y = ${e.pageY}`;
// });

// Write a Javascript code for character counts in the textarea.

// const textarea = document.querySelector("#textarea");
const textarea = document.getElementById("textarea");
textarea.addEventListener("input",(element)=>{
document.querySelector("span").innerText = `characters in the textarea ${element.target.value.length}`
});