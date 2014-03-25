//creates a variable and assigns a function to it
var exercise = (function() {

//sets private as functions and creates functions to be called anytime
    var _private = {
        i:50,
        get : function() {
            console.log( "current value in exercise module:" + this.i);
        },
        set : function( val ) {
            this.i = val;
        },
        jog : function() {
            console.log( "jogging" );
        },
        jump: function(){
            console.log( "jumping" );
        },
        walk: function(){
            console.log("walking");
        }
    };

    return {

    
//creates and initiates facade as a function to get the values from exercise module    
        facade : function( exer ) {
            _private.set(exer.val);
            _private.get();
            if ( exer.jog ) {
                _private.jog();
            }
        }
    };
}());
 
 
// Outputs the current value and the run function
exercise.facade( {jog: true, val:25} );