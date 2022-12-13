// **************************** //
// Exercise 39
// **************************** //

// Create a validation function that will prevent a 
// user from inputting the following strings input a field:  (4 hours)
// - 1234
// - qwert
// - asdf
// - 4 or more consecutive characters on the keyboard  

// LAST COMMENT
// 39) String validation
// - using a regular expression seems unnecessary and error prone. 
//     - consider the input “asd+”
//     - consider using indexOf instead

const prompt = require("prompt-sync")();
function validate(str) {  
    let len= str.length;
    let lenChart;
    let keyboard= ["qwertyuiop", "asdfghjklñ", "zxcvbnm","mnbvcxz","ñlkjhgfdsa","poiuytrewq","1234567890", "0987654321"];
    function validation(sequence){
        lenChart=sequence.length;
        if (len>3){
            for (let i=0;i<lenChart;i++){
                sum=0;
                for (let ii=0; ii<len; ii++) {
                    if (str.charAt(ii) != sequence.charAt(i+ii)){ break; }
                    sum++;         
                    if (sum==4) throw new Error ('Input not valid');
                }        
            }
        }   
    }
    keyboard.forEach(element => validation(element));    
}
let str = prompt("Input a string: ");
validate(str);




