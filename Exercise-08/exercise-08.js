// **************************** //
// Exercise 08
// **************************** //

// Given an array of size N, move all zeroes contained in 
// the array to the end while preserving the relative 
// order of all other elements. (2 hours)

// Do not use a separate array
// Do not use splice

// Input: [2,0,4,5,0,2,0,0,3]
// Output: [2,4,5,2,3,0,0,0,0]            

function orderArr(arr){
     let len= arr.length;
     let cont=0;
     let val=0;
     for (let i=0; i<len; i++){
         val= arr.shift();
         if (val>0){
            arr.push(val)
         }else{
          cont++;
         }
     }
     for (let i=0; i<cont; i++){
         arr.push(0);
     }
     return arr;
}

console.log(orderArr([2,0,4,5,0,2,0,0,3]));
