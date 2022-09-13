// **************************** //
// Exercise 17
// **************************** //

// Given the following markup and the previous candidate object: (1 hour).
// - Select the second div with class info    
// - Insert the candidate’s first name into that div’s first child
// - Insert the full name into the second div using the printName method            

let candidate = {
    name: {
       firstname: 'John',
       lastname: 'Galt',
       phone: '123-456-7890'
    }
  }  
  candidate.printName=function(){
      return this.name.firstname + ' ' + this.name.lastname;
  }

let elementInfo2 = document.querySelectorAll('.info')[1];
elementInfo2.firstChild.textContent = `${candidate.name.firstname}`; 
elementInfo2.lastElementChild.textContent = `${candidate.printName()}`;



