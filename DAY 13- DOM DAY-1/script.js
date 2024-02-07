/*const divison = document.createElement("div")
divison.innerHTML="<span>Hi this dynamic span</span>"
document.body.append(divison);
*/
//!creating multiple elements
/*const divison = document.createElement("div");
const span = document.createElement("span");
const heading = document.createElement("h1");
heading.innerHTML="Hello this is head tag";
span.innerHTML="Hi is this dynamic span";
divison.append(span);
//divison.append(heading, span);
divison.append(heading);
document.body.append(divison);
*/
//! session Task:-
/*//? creating elements
const div = document.createElement("div");
const header = document.createElement("header");
const section = document.createElement("section");
const h1 = document.createElement("h1");
const span = document.createElement("span");
const article = document.createElement("article");
const p = document.createElement("p");
//? Adding Content
h1.innerText="this is heading tag";
span.innerText="Hi is this dynamic span";
p.innerText="Hi is this dynamic paragraph";
//?Adding class and id for styles
div.className="container";
header.setAttribute("style", "background-color: black; color: aqua")
h1.setAttribute("class","heading")
section.setAttribute("style", "background-color: black")
article.setAttribute("style", "background-color: black")
section.classList.add("section","section1")
//? Appending elements
header.appendChild(h1);
section.appendChild(span);
article.appendChild(p);
div.append(header,section,article);
document.body.append(div);
*/

//multiple elements creation dynamically
/*function elements(tagname,content,attrname,attrvalue){
    const ele = document.createElement(tagname);
    ele.innerHTML = content;
    ele.setAttribute(attrname,attrvalue);
    return ele;
}
const ele1 = elements("div","hi this is dynamic div","class","container")
const span = elements("span","<h1>hi this is heading</h1>","class","span")
ele1.append(span);
document.body.append(ele1);
*/