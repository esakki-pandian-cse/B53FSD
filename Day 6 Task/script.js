// 1.Type script movie 

/*class Movie {
  constructor(title,studio,rating="PG13"){
      this.title=title;
      this.studio=studio;
      this.rating=rating;
  }
}
const Movies = new Movie("Casino Royale","Eon Productions");
const Movies1 = new Movie("Casino Royale","Eon Productions")
console.log(Movies.title);
console.log(Movies.studio);
console.log(Movies.rating);*/

// ------------------------------------------------------------------------------

//2.class circle

/*class Circle{
  constructor(radius, color){
    this.radius=radius;
    this.color=color;
  }
  get radiusCircle(){
    return this.radius;
  }
  set radiusCircle(radius){
    this.radius=radius;
  }
  get colorCircle(){
    return this.color
  }
  set colorCircle(color){
     this.color= color
  }
  get toString(){
    return `"Circle[radius=${this.radius},color={this.color}]"`
  }
  get areaCircle(){
    return Math.PI * this.radius *this.radius; //2pir square
}
  get circumferenceCircle(){
    return 2*Math.PI*this.radius //2pir
  }
}
const object1= new Circle(1.0, "Red");

console.log(object1.radiusCircle); //get radius circle
object1.radiusCircle=2.2
console.log(object1.radiusCircle); // set radiu

console.log(object1.colorCircle); // get color circle
object1.colorCircle= "blue";
console.log(object1.colorCircle);//set color circle

console.log(object1.toString);//get to string

console.log(object1.areaCircle);// get area circle

console.log(object1.circumferenceCircle);// get circimfrence circle*/



// 3.Write a “person” class to hold all the details

/*class Person {
  constructor(name,age,genter,salary){
    this.name=name;
    this.age=age;
    this.genter=genter
    this.salary=salary
  }
}
var obj=new Person("EsakkiPandian", 27, "Male", 27000);
console.log(obj.name);
console.log(obj.age);
console.log(obj.genter);
console.log(obj.salary);*/



// 4. write a class to calculate the uber price.

