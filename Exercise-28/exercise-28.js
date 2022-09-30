// **************************** //
// Exercise 28
// **************************** //

// Create a function that will receive an array of ajax 
// calls and a callback as arguments. The function should 
// execute all ajax calls and execute the callback when all 
// are done. The resulting data of all calls should be the 
// context of the callback function. Example:
//          (2 hours)

// It would be something like this:

let req1 = fetch("data1.json");    // One of the four fetch requests
let req2 = fetch("data2.json");    // One of the four fetch requests
let req3 = fetch("data3.json");    // One of the four fetch requests
let req4 = fetch("data4.json");    // One of the four fetch requests

let arr=[req1,req2,req3,req4];

function conLog(values){
    console.log(values);
}

function manage(arr, callback){
    let len=arr.length;
    let array=[];
    let outputArray=[];
    for (let i = 0; i < len; ++i) {
        array[i] = "a"+i;
    }
    Promise.all(arr).then(async(array) => {
    for (let i=0;i<len;i++){
        outputArray[i] = await array[i].json();
    } 
        return outputArray
      })
      .then((responseText) => {
        callback(responseText);
      }).catch((err) => {
        console.log(err);
      });
}

manage(arr,conLog);

