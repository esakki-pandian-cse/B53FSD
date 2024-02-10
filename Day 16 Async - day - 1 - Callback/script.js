/*console.log("first");
console.log("second");
*/
//!callback using settimeout
/*console.log("App started");
setTimeout(()=>console.log("Loading...."),5000)
setTimeout(()=>console.log("App Completed"),8000)
console.log("Building the application....");
*/
//!callback using function
/*const complete=()=>{
    console.log("Finish");
}
const add =(callback)=>{
    var x = 2;
    var y =3;
    console.log("Sum",x+y);
    callback();
}
add(complete);
*/

/*function add (value1,value2,cb){
    cb(value1+value2,"We got it by adding","this is callback")
}

function print(...data){
    console.log(...data);
}

add(10,20,print)
*/
//! Callback using function and setTimeout
/*function add(value1, value2, cb) {
  setTimeout(() => {
    console.log("Executed after 5 seconds");
    cb(value1 + value2, "We got it by adding", "this is callback");
  }, 5000);
  return "First one";
}
function print(...data) {
  console.log(...data);
}
console.log(add(10, 20, print));
*/
//!Callback hell
setTimeout(()=>{
    console.log("5");
    setTimeout(()=>{
        console.log("4");
        setTimeout(()=>{
            console.log("3");
            setTimeout(()=>{
                console.log("2");
                setTimeout(()=>{
                    console.log("1");
                    setTimeout(()=>{
                        console.log("Happy Independence");
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
},1000)