// **************************** //
// Exercise 33
// **************************** //

// Explain the difference, if any, between the 
// following two functions. Will the returned 
// value be the same if compared? (30 mins)

function func1() { return { prop:"foo"}; }
function func2() { return { prop:'foo'}; }

console.log('foo'==="foo");   // True

// Actually there is no difference if we compare them. 
// The only difference is when we use it in JSON notation 
// where the ' 's are not valid, only the " " .
// Fo example:
// {'abc': 123}  is not valid JSON format.
// {"abc": 123}  is valid JSON format. 
