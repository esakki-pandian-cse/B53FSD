// // session task 

// const age = parseInt(prompt("Enter your age"));
// const promsise1 = new Promise((resolve, reject) => {
//     if (age>=18){
//         resolve("You are eligible")
//     }
//     else{
//         reject("You are not eligible");
//     }
// })
// promsise1.then((data)=>console.log(data)).catch((error)=>console.log(error))

/*function foo(digit){
    return new Promise((resolve, reject) => {
        if(digit>=20){
            resolve("u are the winner")
        }
        else{
            reject("better luck next time")
        }
    })
}
foo(20).then((data)=>console.log(data)).catch((error)=>console.log(error))*/

// function add(num){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>resolve(num+2), 1000)
//     });
// }
// add(0)
// .then((data)=>{console.log(data)
// return add(data)    
// })
// .then((addition)=>{
//     console.log(addition)
//     return add(addition)
// })
// .then((added)=>{
//     console.log(added)
//     return add(added)
// })
// .then((ele)=>{console.log(ele)
// .catch((error)=>{console.log(error)})
// });
