
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

function reverse(str) {
    let newStr = "";
    for (let i = str.length - 1; i >= 0; i--) { 
        newStr += str[i]; 
    }
    return newStr; 
} 
console.log(reverse('hello world'));  // dlrow olleh

function reverseWorlds(str) {
    const space = ' ';
    const index = [...str.matchAll(new RegExp(space, 'g'))].map(a => a.index);
    let newStr = "";
    let len = index.length;
    let posFinal=0;
    for (let i=0;i<=len;i++){
        if (i==len){
            posInitial=str.length-1;
        }else{
            posInitial=index[i]-1;
        }
        for (let ii = posInitial; ii >= posFinal; ii--) { 
                newStr += str[ii];
        }
        if (i<len) newStr += ' ';
        posFinal=index[i]+1;
    }
    return newStr; 
} 
console.log(reverseWorlds('hello world'));     // olleh dlrow





