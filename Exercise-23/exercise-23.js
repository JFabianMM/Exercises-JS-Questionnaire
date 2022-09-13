// **************************** //
// Exercise 23
// **************************** //

// Write a function that will generate random integer numbers 
// within a given range (min - max). The number 
// should not repeat an already generated number. 
// Do not store previously computed values

let number = (function() {
    let privateArray=[];
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    return {
      setMinMax: function(min1,max1) {
        let range = (min, max, step) => Array.from({ length: (max - min) / step + 1}, (_, i) => min + (i * step));
        privateArray= range(min1,max1,1);
      },
      getRanNumber: function() {
        let len= privateArray.length;
        if (len>0){
            let index=getRandomInt(len-1);
            let num=privateArray[index];
            privateArray.splice(index, 1); 
            return num;
        }
      },
    };
  })();
  
  // The way I designed the function is as follows:
//   First I set the range with the method and then I can get the random numbers 
//   with the method counter.setMinMax(min,max); 
//   Once there are no more available numbers, the result will be 
//   undefined, until I set a new range.

// This way I dont store previously computed values (not directly).  

  number.setMinMax(2,8);  
  console.log(number.getRanNumber());
  console.log(number.getRanNumber());
  console.log(number.getRanNumber());
  console.log(number.getRanNumber());
  console.log(number.getRanNumber());
  console.log(number.getRanNumber());
  console.log(number.getRanNumber());
  console.log(number.getRanNumber());
  number.setMinMax(5,20); 
  console.log(number.getRanNumber());