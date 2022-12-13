// **************************** //
// Exercise 19
// **************************** //

// Write a function that will match a string pattern to another string. (4 hour).
// - The * symbol is a single-character wildcard. 
// - Do not use regular expressions

// LAST COMMENT 
// 19) Pattern with wild-card character
//     - something is very odd with the output given by:

//     text: laarl
//     pattern: l**l

//     - try to come up with a simpler implementation. 
//       A bunch of nested for-loops isn’t great for performance.

// I completely modified the next code
function newMatch(pattern) {  
    let textLen=this.length, match, patLen=pattern.length;
    if (patLen>textLen) return null;
    for (let i=0;i<textLen;i++){
        sum=0;
        match='';
        for (let ii=0; ii<patLen; ii++) {
            if ((this.charAt(i+ii) != pattern.charAt(ii)) && (pattern.charAt(ii) != '*')){ break; }
            sum++;
            match=match.concat('', this.charAt(i+ii));
            if (sum==patLen){return match} 
        }        
    }   
    return null
}

Object.defineProperty(String.prototype, 'newMatch', {
    value: newMatch
});

let text1 = 'hhjjkol9ul';
let patt1= '*ol*';

// let text1 = 'gbalabh';
// let patt1= '*al**';

// let text1= 'laarl';
// let patt1= 'l***l';

let found1 = text1.newMatch(patt1);
console.log(found1);
