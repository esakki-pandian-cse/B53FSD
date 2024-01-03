/*var a =10;
var b =20;
var c = 30;
var d = 10;
//function example:-
function add(a,b){
    console.log(a+b);
 }
function mul(num1,num2){
    console.log(num1*num2);
}
function sub(c,d){
  console.log(c-d);
}
sub(c,d);
mul(a,b);
add(10,10);
*/
//using return
/*function multi(a,b,c){
    return a*b*c; 
}

multi(2,3,4);
multi(3,4,5);
*/

//print odd numbers in an array [1,2,3,4,5,6,7,8,9,10,11,12,13]

/*var result = [];
function odd(arr){
  for(var i=0;i<arr.length;i=i+1){
    if(arr[i]%2!==0){
        result.push(arr[i]);
    }
  }
  return result;
}
console.log(odd([15,18,23,14,16,24]));
*/

//using annoymous function

/*var result = [];
var a = function (arr){
  for(var i=0;i<arr.length;i=i+1){
    if(arr[i]%2!==0){
        result.push(arr[i]);
    }
  }
  return result;
}
console.log(a([15,18,23,14,16,24]));
*/

//IIFE
// (function (a,b){
//     console.log (a+b)
//  })(1,2)
//({})()
/*var result = [];
(function (arr){
  for(var i=0;i<arr.length;i=i+1){
    if(arr[i]%2!==0){
        result.push(arr[i]);
    }
  }
  console.log(result) 
})([1,2,3,4,5,6,7,8])
*/

//Arrow functions (ES6)

/*var result = [];
var odd =(arr)=>{
  for(var i=0;i<arr.length;i=i+1){
    if(arr[i]%2!==0){
        result.push(arr[i]);
    }
  }
  return result;
}
odd([15,18,23,14,16,24]);
*/
//var variablename=()=>{}variablename()

// -------------------ESAKKI PANDIAN-----------------------------------

// => step 1:- create a XHR Object
// var request = new XMLHttpRequest();
// // step 2:- opening a connection to the server 
// request.open("GET","https://restcountries.com/v3.1/all",true);
// // step 3:- sending a request 
// request.send();
// // step 4:- server response 
// request.onload = function(){
//     var data = request.response;
//     // console.log(data);
//     var result = JSON.parse(data);
//     console.log(result);
//     // console.log(result[47].area)
//     // for acccesing multible values use looping
//     for(var i=0; i<result.length; i++){
//       console.log(result[i].flags)
//     }

// }

var request1 = new XMLHttpRequest();
// step 2:- opening a connection to the server 
request1.open("GET","https://restcountries.com/v3.1/all",true);
// step 3:- sending a request 
request1.send();
// step 4:- server response 
request1.onload = function(){
    var data1 = request1.response;
    // console.log(data);
    var result1 = JSON.parse(data1);
    console.log(result1);
    // console.log(result[47].area)
    // for acccesing multible values use looping
    for(var i=0; i<result1.length; i++){
      console.log(result1[i].name.common,result1[i].region,result1[i].subregion);
    }

}