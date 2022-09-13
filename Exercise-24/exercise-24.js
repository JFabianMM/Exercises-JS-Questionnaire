// **************************** //
// Exercise 24
// **************************** //

// Create a function that will remove 
// specific elements from an array.  (1 hours)          

function remove(Arr, values){
    let len=arguments.length;
    let arr=Arr;
    let var1;
    let count=0;
    for (let i=0;i<len-1;i++){
         var1=arguments[i+1];
         arr.splice(var1-count, 1);
         count++;
    }
    return arr;
}

var list = ["bar1", "baz1", "foo1", "qux1", "bar2", "baz2", "foo2", "qux2"];
console.log(remove(list, 2,3, 7));


    

