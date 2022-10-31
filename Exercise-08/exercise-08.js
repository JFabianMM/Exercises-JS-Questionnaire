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
    for (let i=0; i<len; i++){
       if (arr[i]==0){
           for (let j=i+1; j<len; j++){
                if (arr[j]!=0){
                    [arr[i], arr[j]] = [arr[j], arr[i]];
                    break;
                }
            }
       }
    }
    return arr;
}

console.log(orderArr([0,2,0,4,5,0,2,0, 7,0,0,3]));
