// **************************** //
// Exercise 16
// **************************** //

// Given the following object definition, add a method 
// called printName() that returns the firstname plus 
// the lastname when invoked. (30 mins).

let candidate = {
  name: {
     firstname: 'John',
     lastname: 'Galt',
     phone: '123-456-7890'
  }
}  

candidate.printName=function(){
    return this.name.firstname + ' ' + this.name.lastname;
}

console.log(candidate.printName());