// **************************** //
// Exercise 11
// **************************** //

// Create a function that will return the properties 
// that are different between 2 objects. 

function compareObj(obj1, obj2){
  let arr = [];
  for (let x in obj1) {
     if (!obj2[x]){
        arr.push(x);
      }
  }
  for (let x in obj2) {
    if (!obj1[x]){
      arr.push(x);
     }
 }
  return arr;
}

const person1 = {
  fname1:"John",
  lname1:"Smith",
  age:25
}; 
const person2 ={
  name2:"Max",
  name3:"Lopez",
  age:25
};

console.log(compareObj(person1, person2));