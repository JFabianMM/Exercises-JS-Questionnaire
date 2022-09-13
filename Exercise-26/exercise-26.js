// **************************** //
// Exercise 26
// **************************** //

// Explain the following code: (30 mins)            

function foo1(){
  var fn = function(){
   console.log(this.foo);
  };
  return { foo:'bar' };
}

function foo2(){ 
  var fn = function(){
      console.log(this.foo); 
  };
  return { foo:'baz' };
}

console.log(foo1());
console.log(foo2());

// The explanation is very simple. 
// Each of the functions (foo1 and foo2) returns an object.
// That object is the one we print with console.log().

