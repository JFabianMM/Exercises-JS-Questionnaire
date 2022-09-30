// **************************** //
// Exercise 03
// **************************** //

//Obtain the intersection of two arrays (1 hours)
//Input:
//  [2, 3, 5, 3] & [3, 4, 3, 5, 3, 6, 8]

//Output:
//  [3, 5, 3]


function intersect(a, b) {
  let newArr=[];
  let lenB=b.length;
  a.forEach(element => {
    for (let i=0;i<lenB;i++){
      if (element==b[i]){
        newArr[newArr.length]=b[i];
        b.splice(i, 1);
        break;
      }
    }
  });
  return newArr;
}

let a=[2,3,5,3];
let b=[3,4,3,5,3,6,8];

console.log(intersect(a, b));

