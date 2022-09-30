
// **************************** //
// Exercise 02  
// **************************** //

// Reverse a string in JavaScript (1 hours)
// Do not use split.reverse.join

// Create an instance method for all strings that returns the reversed string

// "hello world".reverse(); // ldrow olleh

// Create an instance method for all strings that returns the reversed string, 
// but keeps the order of the words:

// 	"hello world".reverseWords(); // olleh ldrow

function reverse() {
    let string=this;
    let newStr = "";
    for (let i = string.length - 1; i >= 0; i--) { 
        newStr += string[i]; 
    }
    return newStr; 
} 

Object.defineProperty(String.prototype, 'reverse', {
    value: reverse
})

function reverseWords() {  
    let str =this;
    let words = str.match(/\S*/g)
    let newWord='';
    let len = words.length;
    for (let i=0;i<len-1;i++){
        if ((words[i]!='') && (i==0) ) newWord=words[i].reverse();
        if ((words[i]!='') && (i>0) ) newWord=newWord + ' ' +words[i].reverse();
    }
    return newWord; 
} 
Object.defineProperty(String.prototype, 'reverseWords', {
    value: reverseWords
})

let str='hello beautifull world';
console.log(str.reverse());
console.log(str.reverseWords());
