// **************************** //
// Exercise 06
// **************************** //

// b Write a function that will produce the correct 
// output given the input without hardcoding it. 

// Input: "January February March January February March"
// Output: "January February March April January February March April"


function months(str){
    let arr=['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'Nomember', 'December'];
    let arr2 = str.split(" ");
    let len = arr2.length;
    let newArr=[];
    for (let i=0;i<len;i++) {
        newArr.push(arr2[i]);
        let index=arr.indexOf(arr2[i]);
        if (arr[index+1]!=arr2[i+1]){
            newArr.push(arr[index+1]);
        }
     }
     return newArr.join(' ');
}
let str="January February March January February March";
console.log(months(str));