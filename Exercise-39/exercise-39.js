// **************************** //
// Exercise 39
// **************************** //

// Create a validation function that will prevent a 
// user from inputting the following strings input a field:  (4 hours)
// - 1234
// - qwert
// - asdf
// - 4 or more consecutive characters on the keyboard    

// 39) String validation
//     - “fdsa” is just as consecutive as “asdf”
//     - “90qwe” should not be detected as consecutive

const prompt = require("prompt-sync")();
function validate(str) {  
    let newStr, len= str.length;
    let keyboard= ["qwertyuiopasdfghjklñzxcvbnm","mnbvcxzñlkjhgfdsapoiuytrewq","1234567890", "0987654321"];
    function validation(keys){
        if (len>3){
            for (let i=0;i<=len-4;i++){
                newStr="";
                for (let ii=0; ii<4; ii++) newStr += str[i+ii];         
                if (keys.match(new RegExp(newStr))) throw new Error ('Input not valid');
            }        
        }
    }
    keyboard.forEach(element => validation(element));    
  }

  let str = prompt("Input a string: ");
  validate(str);




