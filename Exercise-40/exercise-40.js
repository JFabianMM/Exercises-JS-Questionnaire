// **************************** //
// Exercise 40
// **************************** //

// Given an array with positive and negative numbers, 
// write a function that will find all combinations of 3 numbers 
// in that array which sum will total zero.  (4 hours)            

// Input: [3,2,1,0,-3,2,2,-2]

// Output: (2, 1, -3), (3, 0, -3), … 

// 40) Sum zero tripplets
//    - This problem is well known at it would be worth studying known good solutions
//      https://www.geeksforgeeks.org/find-triplets-array-whose-sum-equal-zero/


// There are 2 solutions, the first one is mine, the second one is the found in the link you sent me. 
// I found that the 2 solutions are practically the same: 3 'for's' and 1 'if' practically the same. 
// I leave the 2 solutions. 


function arrayCombinatios(arr){      // My solution
     let str='';
     let ban=0;
     let len=arr.length;
     for (let i=0; i<len-2; i++){
        for (let ii=i+1; ii<len-1; ii++){
            for (let iii=ii+1; iii<len; iii++){
                 if (arr[i]+arr[ii]+ arr[iii]==0){
                    if (ban==0){
                      ban=1;
                      str= str + `(${arr[i]}, ${arr[ii]}, ${arr[iii]})`;
                    }else{
                      str= str + `, (${arr[i]}, ${arr[ii]}, ${arr[iii]})`;
                    }
                 }
            }
        } 
     }
  return str;   
}

let arr=[3,2,1,0,-3,2,2,-2];
console.log(arrayCombinatios(arr));
     
// // The link solution. I only modified the part to print the triplets
    function findTriplets(arr) {
        let found = false;
        let newArr=[];
        let triplet='';
        for (let i = 0; i < arr.length - 2; i++) {
          for (let j = i + 1; j < arr.length - 1; j++) {
            for (let k = j + 1; k < arr.length; k++) {
                if (arr[i] + arr[j] + arr[k] === 0){
                  triplet=triplet + `(${arr[i]}, ${arr[j]}, ${arr[k]})`; 
                  newArr[newArr.length]=triplet;
                  triplet='';
                  found = true;  
                }
            }
        }
    }
    return newArr;
   }


arr=[3,2,1,0,-3,2,2,-2];
console.log(findTriplets(arr));
