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

// COMMENTS 
// 8) Moving zeroes
// - you should strive for a more efficient algorithm. 
//   It is possible to do this in linear time

function orderArr(arr){
    let len= arr.length, n;
    for (let i=0; i<len; i++){
       if (arr[i]==0){ // then find the first non-zero value and interchange them
            n=i+1;
            while ((arr[n] == 0)&& n < len) {n++;}  // find the first non-zero value
            if (n < len){ 
               [arr[i], arr[n]] = [arr[n], arr[i]];  // interchange them
            }else{break;} // If all zeros are in the last part, then break the loop
       }
    }
    return arr;
}

console.log(orderArr([0,2,0,4,5,0,2,0,7,0,0,3]));
