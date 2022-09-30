// **************************** //
// Exercise 09
// **************************** //

// Implement a recursive function to calculate a specified 
// member of the Fibonacci series.(1 hour).
// Optimize the implementation through the use of a cache (memoization)


function fibonacci(num){
  let memo = [];
  function fib(num) {
    if(memo[num]){    
        return memo[num];
    }
    if(num < 2) {
        return num;
    }else {
        memo[num]= fib(num-1) + fib(num - 2);
        return memo[num];
    }
  }
  let result=fib(num);
  return result;
}

 console.log(fibonacci(19));
