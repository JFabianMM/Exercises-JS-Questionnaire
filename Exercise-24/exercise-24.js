// **************************** //
// Exercise 24
// **************************** //

// Create a function that will remove 
// specific elements from an array.  (1 hours)  

function remove(arr, ...values){
    let lenValues=values.length;
    let lenArr= arr.length;
    for (let i=0; i<lenValues; i++){
        for (let j=0; j<lenArr; j++){
            if (values[i]==arr[j]){
                  arr.splice(j, 1);
                 j--;
                 lenArr--;    
             };    
        } 
    }
    return arr;
}

let list = ["bar1", "baz1", "foo1", "qux1", "bar2", "baz2", "foo2", "qux2"];
console.log(remove(list, "foo1", "baz1", "qux2"));
