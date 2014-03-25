//singleton pattern it  encapsulates functions to keep code neat
var module = (function() {

//creates an array
	var array = [];

	return {
		addToArray: function() {
			array.push(1,2,3,4,5);
		},
		removeFromArray: function() {
			array.pop();
		},
		alertArray: function() {
			alert(array.length);
		}
	}

})();

module.addToArray();
module.alertArray();

//facade pattern
var DBUG = function() {
	_private = {
		getThis : function( count ) {
			//  implementation of the pattern  
		},
		putThis : function() {
			//  implementation of the pattern
		},
		runThis : function() {
			//  implementation of the pattern
		}
	};
	return {
		facade : function( args ) {
			_private.getThis( args.count );
			_private.putThis();
			if ( args.runIt ) {
				_private.runThis();
			}
		}
	}
}();

window.onload = function() {
	DBUG.facade({
		runIt : true,
		count : 1
	});
	DBUG.facade({
		runIt : false,
		count : 2
	});
}

module = (function() {
	_privateVar = "value";

	function getter() {
		return _privateVar;
	}

	function setter(val) {
		if (!val) _privateVar = _privateVar;
		else _privateVar = val;
	}

	return {
		public_getter: getter,
		public_setter: setter
	}
})();
module.public_setter('it works!');
console.log( module.public_getter() );