// **************************** //
// Exercise 40
// **************************** //

// Given an array with positive and negative numbers, 
// write a function that will find all combinations of 3 numbers 
// in that array which sum will total zero.  (4 hours)            

// Input: [3,2,1,0,-3,2,2,-2]

// Output: (2, 1, -3), (3, 0, -3), … 

function arrayCombinatios(arr){
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


