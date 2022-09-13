// **************************** //
// Exercise 04 
// **************************** //
 
// Create a JS function that flattens an array:
// Input:
//   [1,2,3,[4,5,[6,7]], 8,9]

// flat(Input);
// Output:
//   [1,2,3,4,5,6,7,8,9]

const flatten = (nested) => {
  const flat = [];
  const handleFlat = (array) => {
    let counter = 0
    while (counter < array.length) {
      const val = array[counter];
      if (Array.isArray(val)) {
        handleFlat(val);
      } else {
        flat.push(val)
      }
      counter++;
    }
  }
  handleFlat(nested);
  return flat;
}

let a= [1,2,3,[4,5,[6,7]], 8,9];
console.log(flatten(a)); // [1, 2, 3, 4, 5, 6, 7];