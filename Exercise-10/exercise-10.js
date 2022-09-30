// **************************** //
// Exercise 10
// **************************** //

// Create a constructor of a Person with 2 properties: name and last name. (1 hour).
// - Pass arguments as parameters to fill the person’s properties
// - Create a method on Persons to retrieve their full name
// - Create another constructor of a Medic to inherit from Person
// - Pass name, last name and specialty as parameters
// - Write an ajax GET request that sends data from the Person object

// 10) Person object
//     - The GET request requirement is missing. You can use fetch instead of 
//       the XMLHttpRequest object. 
//       You could also make it a method of Person instances.

  
  function Person(first_name,last_name) {                                         // Shape is the root constructor with (name, getName(), clone())
    this.first_name = first_name; 
    this.last_name = last_name;
  }
  Person.prototype.getName = function() { 
    return this.first_name + ' ' + this.last_name;      
  }

  Person.prototype.getRequest = function() { 
      fetch ('/test', {
          method: 'GET',
          data: {
            name: this.first_name,
            lastName: this.last_name
          }
      }).then((response) => response.json())    // In case of receiving a response
      .then((data) => console.log(data));       // In case of receiving a response      
  }

  Person.prototype.clone = function(first_name,last_name) {   // Is added the constructor
    return new this.constructor(first_name,last_name);
  }
  
  function Medic(first_name,last_name, specialty) {    
    Person.call(this, first_name, last_name);
    this.spaeciality=specialty;
  }
  
  Medic.prototype = Object.create(Person.prototype);          // Is copied the prototype
  Medic.prototype.constructor = Medic;                        // The constructor is changed 
  
  Medic.prototype.clone = function(first_name,last_name, specialty) {   // Is added the constructor
    return new this.constructor(first_name,last_name, specialty);
  }
  
  let person1 = new Person('Antony', 'Perez');        // Is created by the Medic constructor
  console.log(person1.getName())                      // Method getName
  let person2 = new Person('Javier', 'Avilez');       // Is created by the Medic constructor
  console.log(person2.getName())         
  let person3 = person2.clone('Alise', 'Guterrez');   // Is created and instance of Medic
  console.log(person3.getName()) 

  let medic1 = new Medic('Jesus', 'Mendoza', 'Cardiologist'); // Is created by the Medic constructor
  let medic2 = medic1.clone('Jose', 'Smith', 'Surgeon');      // Is created and instance of Medic
  
  console.log(medic1 instanceof Medic)        // Only to confirm that the constructor is Medic
  console.log(medic1.getName())               // Method getName
  console.log(medic2.getName())               // Method getName

