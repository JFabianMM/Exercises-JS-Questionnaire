// **************************** //
// Exercise 09
// **************************** //

// Implement a recursive function to calculate a specified 
// member of the Fibonacci series.(1 hour).
// Optimize the implementation through the use of a cache (memoization)

var me = [];
 function fibonacci(num) {
  if(me[num]){    
    return me[num];
  }
   if(num < 2) {
       return num;
   }else {
       me[num]= fibonacci(num-1) + fibonacci(num - 2);
       return me[num];
   }
 }
 console.log(fibonacci(19));
