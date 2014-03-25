// creates function and objects
function constructor( coffee, dollars ) {

//declares coffe & dollars as the owners
  this.coffee = coffee;
  this.dollars = dollars;

// to string is now equal to our function 
  this.toString = function () {
    return this.coffee + " costs: " + this.dollars + " dollars";
  };
}

// Usage:

// Creates new instances of the objects
var Expresso = new constructor( "Expresso",  3 );
var Capuccino = new constructor( "Capuccino", 5 );


// outputs the string to be called by the methods
console.log( Expresso.toString() );
console.log( Capuccino.toString() );
