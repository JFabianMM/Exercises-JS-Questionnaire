// **************************** //
// Exercise 24
// **************************** //

// Create a function that will remove 
// specific elements from an array.  (1 hours)        

function remove(arr, ...values){
    values.forEach(valuesEle => {
        arr = arr.filter((arrEle) => arrEle != valuesEle) 
    });    
    return arr;
}

let list = ["bar1", "baz1", "foo1", "qux1", "bar2", "baz2", "foo2", "qux2"];
console.log(remove(list, "foo1", "baz1", "qux2"));
