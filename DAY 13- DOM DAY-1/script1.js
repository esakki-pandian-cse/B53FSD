//get using id
const res = document.getElementById("contain")
//console.log(res);

//get using classname
const res1 = document.getElementsByClassName("container")
//console.log(res1);

//get using tagname
const res2 = document.getElementsByTagName("span")
//console.log(res2);

// query selector
const  res3 = document.querySelector(".container")
//console.log(res3);

//queryselector all
const  res4 = document.querySelectorAll("div")
//console.log(res4);


//editing element
const h1 = document.createElement("h1")
h1.innerHTML="hi hello how are you iam fine"
document.body.append(h1);
const heading = document.querySelector("h1")
heading.innerHTML="hi hello ";


const division= document.querySelector("div")
division.innerHTML="hi hello world"