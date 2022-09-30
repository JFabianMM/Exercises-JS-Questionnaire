// **************************** //
// Exercise 21
// **************************** //

// What is the outcome of the following code? (30 mins).          

// var foo = "hello";
// (function () { 
//    var bar = "World";
//    alert( foo + bar); 
// })();
// alert( foo + bar);
// For the above code snip, the answer is: 
// hello World 
// ReferenceError: bar is not defined 


if( [] ) console.log("array is true");
if ([] == true) console.log("array == true");
// For the above code snip, the answer is: 
// array is true 

for(let i = 0; i < 5; ++i){
  setTimeout(function(){
       console.log("counter: ", i);
  }, 100);
}
// For the above code snip, the answer is:  
// counter:  0
// counter:  1
// counter:  2
// counter:  3
// counter:  4

let obj = {
  prop: {}
};
delete obj.prop;
console.log(obj.prop);
// For the above code snip, the answer is: Nothing


