// **************************** //
// Exercise 33
// **************************** //

// Explain the difference, if any, between the 
// following two functions. Will the returned 
// value be the same if compared? (30 mins)

function func1() { return { prop:"foo"}; }
function func2() { return { prop:'foo'}; }

console.log(func1()===func2());   // True


// EXPLANATION

// If we compare two functions with the operand '===' always will be false as
// console.log(func1()===func2());   // False

// We can review even the following:
function func3() { return { prop:'foo'}; }
console.log(func2()===func3());   // Also False

// Apparently we can think is equal, however functions may have identical text 
// but refer to different closures
