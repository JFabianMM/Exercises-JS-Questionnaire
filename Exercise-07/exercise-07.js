// **************************** //
// Exercise 07
// **************************** //

// Find the maximum value in an array using the Math.max function. (10 mins)

function maxVal(arr){
  return Math.max.apply(null, arr);  
}

let arr=[1,2,13,4,5,6];
console.log(maxVal(arr));