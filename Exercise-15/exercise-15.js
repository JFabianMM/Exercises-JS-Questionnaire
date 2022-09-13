// **************************** //
// Exercise 15
// **************************** //

// Given the following code snippet of a module, create 
// two public methods and 1 private method (30 mins).

// var foo = (function () { /* … */ })();
// foo.bar();
// foo.test();    

let foo = (function () { 
    // Private Method
    let randomNumberGenerator = function (max) { // Generate a random number range (0-max) 
		return Math.random()*max;
	};

    // 2 Public Methods
    return {
    // First Public method
    numMult: function(a,b){      // Multiply two numbers 
        return a*b;
    },
    // Second Public method
    ranNumArr: function(len,max){ // Generate an array of random numbers with lenght =len
        let arr=new Array;        // and the range is (0-max)
        for (let i=0;i<len;i++){
            arr.push(randomNumberGenerator(max));
        }  
        return arr;
    }  
}
})();

console.log(foo.numMult(10,5));     // Multiply 2 numbers
console.log(foo.ranNumArr(5,20));   // array of 5 random numbers with range (0-20) 

