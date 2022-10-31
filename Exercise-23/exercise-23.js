// **************************** //
// Exercise 23
// **************************** //

// Write a function that will generate random integer numbers 
// within a given range (min - max). The number 
// should not repeat an already generated number. 
// Do not store previously computed values

// 23) Random numbers
//    - You are expected to not store any of the values generated or that are yet 
//      to be generated. No arrays or objects or storing of any kind for the numbers.
  
  // The way I designed the function is as follows:
//   - First I set the range with the method number.setMinMax(min, max). 
//   - Then I can get the random numbers with the method number.getRanNumber(); 
//   - Once there are no more available numbers in the range, 
//     the result will be Null, until I set a new range. 

// In a general terms, the solution consist of getting the first number (random) in the range.
// The next values are obtained by getting a random prime number and adding that prime number 
// to the current number each time is requested a number.

let number = (function() {
  let count=0, numbers, max, min, current_number, primes=[], prime, range, numdig, flag=0, last, minPrime;
  return {
    setMinMax: function(min1,max1) {     
      numbers=max1-min1;
      max=max1;
      min=min1;
      count=0;
      primes=[];
    },
    getRanNumber: function() {
      if (count==0){
          primes=[];
          let first_number=Math.floor(Math.random() * (max+1 - min) + min);
          current_number=first_number-min; 
          range = max-min;
          numdig=Math.floor(Math.log10(range))+1;       // Number of digits
          let maxPrimeNumber = Math.pow(10, numdig);    // Max prime number
          count++;
          if (numdig<2) {
            minPrime=3;
          }else{
            minPrime=20;
          }
          for (let i = minPrime; i <= maxPrimeNumber; i++) {
                let flag = 0;
                for (let j = 2; j < i; j++) {
                    if (i % j == 0) {
                        flag = 1;
                        break;
                    }
                }
                if (i > 1 && flag == 0) {
                  if ((i!=5) && (i!=11) && (i!=89) && (i!=67) && (i!=43)) primes[primes.length]=i;
                }
          }
          prime=primes[Math.floor(Math.random() * (primes.length - 0) + 0)];   // This is the random prime number
          return first_number;
      }else{
        if (count>range) return null;
        current_number;
        while (flag==0){
          current_number=current_number+prime;
          last = String(current_number).slice(-numdig); 
          current_number = Number(last); 
          if (current_number >= 0 && current_number <= range) {
              count++;
              return current_number + min;
          }
        }        
      }
    }
  }
}
)();

  number.setMinMax(1702,1712);  
  console.log('this: ', number.getRanNumber());
  console.log('this: ', number.getRanNumber());
  console.log('this: ', number.getRanNumber());
  console.log('this: ', number.getRanNumber());
  console.log('this: ', number.getRanNumber());
  console.log('this: ', number.getRanNumber());
  console.log('this: ', number.getRanNumber());
  console.log('this: ', number.getRanNumber());
  console.log('this: ', number.getRanNumber());
  console.log('this: ', number.getRanNumber());
  console.log('this: ', number.getRanNumber());
  console.log('this: ', number.getRanNumber());
  console.log('this: ', number.getRanNumber());
  console.log('this: ', number.getRanNumber());
  console.log('this: ', number.getRanNumber());




