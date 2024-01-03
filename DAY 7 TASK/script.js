// B.Get all the countries with a population of less than 2 lakhs using Filter function
/*var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true)
request.send();
request.onload = function(){
    var data = request.response;
   var result = JSON.parse(data);
var res = result.filter((x)=>x.population<200000)
var final = res.map((ele)=>console.log(ele.name.common))
}*/

// ------------------------------------------------------------------------------------------------------------------------------------

//C. Print the following details name, capital, flag, using forEach function
/*var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true)
request.send();
request.onload = function(){
    var data = request.response;
   var result = JSON.parse(data);
   var res = result.forEach((ele)=>console.log(`name: ${ele.name.common} capital: ${ele.capital} flag: ${ele.flag}`))
}*/

// D. Print the total population of countries using reduce function

/*var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true)
request.send();
request.onload = function(){
    var data = request.response;
   var result = JSON.parse(data);
   var res=result.reduce((acc,cv)=>acc+cv.population,0)
   console.log(res)
}*/
