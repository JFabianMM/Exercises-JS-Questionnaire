// **************************** //
// Exercise 37
// **************************** //

// While using as much ES6 syntax as possible, write functions 
// that will do the following:  (1 hours)

// "hello".exclamation() == "hello!"
// "hello world".exclamation() == "hello world!"

// add(2, 5) == 7
// add(7, 11) == 18
// add(12, 8, 5, 6) == 31


// 37) Exclamation string
//     - you should have used `${this}!` so that you can use 
//       more ES6 syntax, as the problem requires


// This is the first function
function exclamation (){
    return `${this}!`;
} 
Object.defineProperty(String.prototype, 'exclamation', {
    value: exclamation
});

console.log("hello".exclamation() == "hello!");
console.log("hello world".exclamation() == "hello world!");

// This is the second function
function add (){
     let sum=0;
     for (let i of arguments) sum=sum+i; 
    return sum;
} 

console.log(add(2, 5)==7);
console.log(add(7, 11)==18);
console.log(add(12,8,5,6)==31);