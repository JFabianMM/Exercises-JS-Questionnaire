// **************************** //
// Exercise 12
// **************************** //

// Create a global function which modifies the DateTime[sic] object. (1 hour).

// The function add the number of days and hours to the date.
function changeTime(date, day, hour){
    let currentDate = date.getDate();
    let currentHours = date.getHours();
    date.setDate(currentDate + day);
    date.setHours(currentHours+hour);
    return date;
}
var date = new Date();
console.log(changeTime(date, 0, 0))            
console.log(changeTime(date, 1, 1))

