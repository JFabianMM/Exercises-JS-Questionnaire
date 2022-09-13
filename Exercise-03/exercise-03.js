// **************************** //
// Exercise 03
// **************************** //

//Obtain the intersection of two arrays (1 hours)
//Input:
//  [2, 3, 5, 3] & [3, 4, 3, 5, 3, 6, 8]

//Output:
//  [3, 5, 3]

function intersect(a, b) {
  var setA = new Set(a);
  var setB = new Set(b);
  var intersection = new Set([...setA].filter(x => setB.has(x)));
  return Array.from(intersection);
}

let a=[1,2,3,5,6,7,8];
let b=[2,3,4,5];

console.log(intersect(a, b));

