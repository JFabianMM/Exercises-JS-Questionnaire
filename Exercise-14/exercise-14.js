// **************************** //
// Exercise 14
// **************************** //

// Create a simple function to tell whether 2 is 
// passed as a parameter or not. (30 mins).


function argTwoDetector(){
  let argTwo = Array.prototype.slice.call(arguments);
  return argTwo.indexOf(2) != -1;
}

console.log(argTwoDetector(7,4,9,4,1)); 
console.log(argTwoDetector(9,10,2, 5,)); 
            