//Class to be decorated so it passes down the value
function Coffee(){
    this.cost = function(){
        return 1;
    };
}

//sets the decorator
function Milk(coffee){
    this.cost = function(){
        return coffee.cost() + 0.5;
    };
}

//sets another decorator
function Whip(coffee){
    this.cost = function(){
        return coffee.cost() + 0.7;
    };
}

//sets yet another decorator
function Sprinkles(coffee){
    this.cost = function(){
        return coffee.cost() + 0.2;
    };
}
//final decorator
function Cream (coffee){
    this.cost = function(){
        return coffee.cost() + 0.9;
    };
}


//implementation of the design 
var coffee = new Coffee();
coffee = new Sprinkles(coffee);
coffee = new Whip(coffee);
coffee = new Milk(coffee);
coffee = new Cream(coffee);
alert(coffee.cost());
console.log (cost);