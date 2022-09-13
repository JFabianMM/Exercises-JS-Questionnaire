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

let urlArray = ["/dev1.json", "/dev2.json", "/dev3.json", "/dev4.json", "/dev5.json"];
let callback = function() {
          alert("done");
    };
let requests = [];
let ajaxFunction = function(urlArray, callback) {
          for(let i = 0; i < urlArray.length; i++) {
            requests.push($.ajax({
              url: urlArray[i]
            }));
          };
};
$.when.apply(undefined, requests).then(function(results){
    callback();
});