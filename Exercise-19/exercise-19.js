// **************************** //
// Exercise 19
// **************************** //

// Write a function that will match a string pattern to another string. (4 hour).
// - The * symbol is a single-character wildcard. 
// - Do not use regular expressions

// 19) Pattern with wild-card character
//     - something is very odd with the output given by:

// text: aal
// pattern: *al*

// text: blab
// pattern: ***al***

// - Try to come up with a simpler implementation. A bunch of nested for-loops isn’t great for performance.

function newMatch(pattern){
    let found=[], flag1=0, patLen=pattern.length, textLen=this.length;
    let splitPat=pattern.split('');
    let splitText = this.split('');
    if (patLen>textLen) return null;
    for (let i=0; i<textLen; i++){              // Text analysis      splitText
        if (flag1==1) break;
        found=[];
        for (let ii=0; ii<patLen; ii++){        // Patern analysis    splitPat
            if (flag1==1) break;
            if (splitPat[ii]==splitText[i] || splitPat[ii]=='*'){
                for (let j=0; j<patLen; j++){
                    if (splitPat[ii+j]==splitText[i+j] || splitPat[ii+j]=='*'){
                        found.push(splitText[i+j]);
                        if (j == patLen-1) flag1=1;
                    }else break;            
                }
            }else break;  
        }
    }
    if (flag1==0){found=null;}
    if (flag1==1){found=found.join('');}
    return found;
}

Object.defineProperty(String.prototype, 'newMatch', {
    value: newMatch
});

let text1 = 'hhjjkol9ul';
let patt1= '*ol*';
//let text1 = 'blab';
//let patt1= '***al***';
let found1 = text1.newMatch(patt1);
console.log(found1);
