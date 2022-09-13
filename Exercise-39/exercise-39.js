// **************************** //
// Exercise 39
// **************************** //

// Create a validation function that will prevent a 
// user from inputting the following strings input a field:  (4 hours)
// - 1234
// - qwert
// - asdf
// - 4 or more consecutive characters on the keyboard     

const prompt = require("prompt-sync")();
function validate(str) {  
    let keyboard = "1234567890qwertyuiopasdfghjklñzxcvbnm";
    let newStr; 
    let len= str.length;
    if (len>3){
        for (let i=0;i<=len-4;i++){
            newStr="";
            for (let ii=0; ii<4; ii++){
                newStr += str[i+ii];
            }         
            if (keyboard.match(new RegExp(newStr))){
                throw 'Input not valid';
            }
        }        
    }
  }
  let keyword = prompt("Input a string: ");
  validate(keyword);




