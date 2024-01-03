//!class
/*class Car{
    constructor(brand,color)
    {
      this.brand = brand; //key =value // c(brand) =>obj(brand) //Audi
      this.color = color; //black
    }
}
var obj = new Car("Audi","Black")
console.log(obj.color);
console.log(obj.brand);
*/
//! session Task  class Person => name,age,gender,salary
/*class Person{
    constructor(name,age,gender,salary=50){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.salary = salary;
    }
}
const  person1 = new Person("rupan",65,"male");
const  person2 = new Person("rupan",65,"male",60);
console.log(person1.name);
console.log(person1.age);
console.log(person1.gender);
console.log(person1.salary);
console.log(person2.salary);
*/

//! class with methods
/*class Car{
    drive(){
    console.log("Driving the car");
    }
    brake(){
    console.log("Applying the brake");
    }
 }
 const car1 = new Car();
car1.drive();
car1.brake();
*/
//!example:-
/*const users = {
  set name(n) {
    console.log("setting a name" + " " + n);
    this._name = n;
  },

  get name() {
    console.log("getting a name");
    return this._name;
  },
};
users.name = "John";
console.log(users.name);
*/
//! example using class and methods:-
/*class Car{
    constructor(power=50){
        this.pow = power; //50
    }
    set power(n){
      
       return `${this.pow=n}` //400
 }
    get power(){
      
        return `${this.pow}hp`  //400hp
    }
}
var car1 = new Car(400);
console.log(car1.power);
*/

// sessin task

/*class Person {
  constructor(name, age,genter, salary){
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

// session task

class Mobile{
  constructor(Brand, Ram, InternalMemory){
    this.Brand=Brand;
    this.Ram=Ram;
    this.InternalMemory=InternalMemory;
  }
}
const obj = new Mobile("Vivo", "6GB", "128GB");
const obj1 = new Mobile("samsung", "5GB", "64GB");
const obj2 = new Mobile("oppo", "4GB", "64GB");
const obj3= new Mobile("lava", "2GB", "28GB");
console.log(obj1.Brand);
console.log(obj1.Ram);
console.log(obj1.InternalMemory);

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

