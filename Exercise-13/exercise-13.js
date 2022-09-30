// **************************** //
// Exercise 13
// **************************** //

// Create an instance method for Date objects that 
// gives you the next day. (1 hour).


Date.prototype.nextDay = function(){
  let currentDate = this.getDate();
  return new Date(this.setDate(currentDate +1));
}

let date = new Date(); 

console.log(date)            
console.log(date.nextDay())