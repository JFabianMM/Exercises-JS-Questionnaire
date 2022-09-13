// **************************** //
// Exercise 05
// **************************** //

// Implement the following functionality for a duplicate() method: (30 mins)

// [1,2,3,4].duplicate(); // output: [1,2,3,4,1,2,3,4]


function duplicate(){
  return this.concat(this);  
}

Object.defineProperty(Array.prototype, 'duplicate', {
  value: duplicate
});

console.log([1,2,3].duplicate()); 
            