// **************************** //
// Exercise 27
// **************************** //

// Explain the result of the following operations (1 hours)
// []+[]
// {}+[]
// []+{}
// {}+{}            

let a=[]+[];
console.log(a); // or 
console.log([]+[]);  // Result is: ''
// Explanation: The result of [] + [] is the concatenation of two empty strings.

let b={}+[];
console.log(b); // or
console.log({}+[]);   // [object Object]
// Explanation: converting an empty object to string yields is as follows:
// console.log(String({}));  //    '[object Object]' 
// So the result of {}+[] is thus concatenating "[object Object]" and "".

let c=[]+{};
console.log(c); // or
console.log([]+{});   // [object Object]
// Explanation: converting an empty object to string yields is as follows:
// console.log(String({}));  //    '[object Object]' 
// So the result of []+{} is thus concatenating "" and "[object Object]".

let d={}+{};
console.log(d);
console.log({}+{});            
// Explanation: converting an empty object to string yields is as follows:
// console.log(String({}));  //    '[object Object]' 
// So the result of {}+[] is thus concatenating "[object Object]" and "[object Object]".
