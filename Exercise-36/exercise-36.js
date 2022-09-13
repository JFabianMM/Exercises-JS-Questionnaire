// **************************** //
// Exercise 36
// **************************** //

// Create a function that returns a function that will 
// return the power of X from a specified number. (1 hours)            

// var n = myPowerFn(3);
// n(2); // output: 9  (3^2)

function myPowerFn(val1){
    let func=function(val2){
        return Math.pow(val1, val2);
    }
    return func;
}
let n=myPowerFn(3);
console.log(n(2));