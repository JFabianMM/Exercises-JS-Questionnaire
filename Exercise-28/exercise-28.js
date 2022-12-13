// **************************** //
// Exercise 28
// **************************** //

// Create a function that will receive an array of ajax 
// calls and a callback as arguments. The function should 
// execute all ajax calls and execute the callback when all 
// are done. The resulting data of all calls should be the 
// context of the callback function. Example:
//          (2 hours)

// 28) Get all Ajax calls
//     - The context data does not start at zero. Look closer at the specification
//     - If one call fails they all fail. That shouldn’t happen.

// {
//   1: <result of first function>,
//   2: <result of second function>
// }

function check(){
    console.log(this[1]);
    console.log(this[2]);
    console.log(this[3]);
    console.log(this[4]);
    console.log(this[5]);
  }
  
  const array1 = ['data1.json', 'data2.json', 'data3.json', 'data4.json', 'data5.json'];
  
  function myFunction(array1,callback){
      let count=0;
      let outputObject={};
      let outputArray=[];
      let len = array1.length;
      for (let i=0; i<len;i++){
          fetch(array1[i])
              .then(response => response.json())
              .then(dat =>  {
                  outputArray[i]=dat;
                  count++;
                  outputObject[i+1]=dat;
                  if (count==len){
                      callback.call(outputObject);
                  }
              })
              .catch(error => {
                  outputArray[i]=error;
                  outputObject[i+1]=error;
                  count++;
                  if (count==len){
                      callback.call(outputObject);
                  }
              }); 
      }    
  }
  
  myFunction(array1, check);

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  // let obj = {dev: "/data1.json", test: "/data22.json", prod: "/data3.json"};
  // let configs = {};
  
  // function doSomethingWith(things){
  //   console.log(things);
  // }
  
  // async.forEachOf(obj, (value, key, callback) => {
  //     fs.readFile(__dirname + value, "utf8", (err, data) => {
  //         if (err) return callback(err);
  //         try {
  //             configs[key] = JSON.parse(data);
  //             console.log(data);
  //         } catch (e) {
  //             return callback(e);
  //         }
  //         callback();
  //     });
  // }, err => {
  //     if (err) console.error(err.message);
  //     // configs is now a map of JSON data
  //     doSomethingWith(configs);
  // });
  
  
  
  
  // var async = require("async");
  
  // let urls= ["data1.json","data2.json","data3.json","data4.json"];// let req1 = fetch("data1.json"); 
  
  // // // // ...or ES2017 async functions
  // async function myFunction (urls, 5, async function(url) {
  //     const response = await fetch("data1.json")
  //     return response.body
  // }, (err, results) => {
  //     if (err) throw err
  //     // results is now an array of the response bodies
  //     console.log(results)
  // })
  
  // async function fetchMovies() {
  //     const response = await fetch('data1.json');
  //     // waits until the request completes...
  //     console.log(response);
  //   }
  // fetchMovies();
  
  // // ...or ES2017 async functions
  // async.mapLimit(urls, 5, async function(url) {
  //     const response = await fetch("data1.json")
  //     return response.body
  // }, (err, results) => {
  //     if (err) throw err
  //     // results is now an array of the response bodies
  //     console.log(results)
  // })
  