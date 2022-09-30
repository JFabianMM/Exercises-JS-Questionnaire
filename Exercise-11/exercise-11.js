// **************************** //
// Exercise 11
// **************************** //

// Create a function that will return the properties 
// that are different between 2 objects. 

const person1 = {
  firstName:"Max",
  lastName:"Smith",
  age:25,
  city:'Los Angeles'
}; 
const person2 ={
  firstName:"Max",
  lastName:"Lopez",
  age:23,
  city:'Tijuana',
  profession: 'Professor'
};

function compareObj(obj1, obj2){
  let arr = [];
  function shallow(propA, propB) {
    if (typeof(propA) !== typeof(propB)) return false;
    if (typeof(propA) === 'array') {
        if (propA.length != propB.length) return false;
        for (let i=0;i<propA.length;i++){
          if (propA[0]!=propB[0]) return false;
        }
    } else if (typeof(propB) === 'array') {
        return false;
    } else if (typeof(propA) === 'object') {
        return Object.keys(propA).every((key) => propA[key] === propA[key]);
    } else if (typeof(propA) === 'date') {
          return propA.getTime() === propB.getTime();
    }
    return propA === propB;
  };
  for (let x in obj1) {
      if (!obj2[x]){ 
        arr.push(x);
      }else {
        let result = shallow(obj1[x], obj2[x]);
        if (!result) arr.push(x);
      }
  }
  for (let x in obj2) {
    if (!obj1[x])arr.push(x);
  }
  return arr;
}

console.log(compareObj(person1, person2));