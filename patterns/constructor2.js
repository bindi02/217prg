function phone(model,year) {
 
  this.model= model;
  this.year= year;
  
  this.toString = function () {
    return this.model + "phone type " + this.year + "year";
  };
}
 

var Apple = new Phone( "Apple 5s", 2014);
var S4= new Phone( "s4 with kitkat", 2014);
 

console.log(Apple.toString() );
console.log(S4.toString() );