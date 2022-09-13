// **************************** //
// Exercise 32
// **************************** //

// Explain the output of the following code: (30 mins)

function myLog() {
    return {
       bar: 'bar',
       foo: 'foo',
       prop: function () {
           var self = this;
           console.log(self.bar);
           console.log(this.foo);
           (function() {
              console.log(self.bar);
              console.log(this.foo);
           })();
       }
    };
 }
 
 var obj = myLog();
 obj.prop();

// The outpout is:
// bar
// foo
// bar
// undefined

// The answer is:  
// The IIFE invoked inside the method results in their own execution context. 
// So, the value of keyword "this" inside the IIFE wont take
// the value of the object (obj), instead it takes the value of 
// the global object. So the value of this.foo is not defined 
// in the global object. 


