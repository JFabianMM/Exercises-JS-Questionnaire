// **************************** //
// Exercise 38
// **************************** //

// Using object-oriented javascript, design and code 
// anything you want. Explain your thought process for 
// your modeling and solution. (1 hours)


// The simplest example that occurred to me is the calculation 
// of the monthly payroll payment per employee in a company.

// The first step is to create the constructor, with the information 
// that we want to store for each employee, 
// as well as the necessary information to calculate the payroll.
// Second, is to create the methods to be inherited by each created employee.

// in order to be able to calculate the monthly payroll by employee, to be 
// able to change the salary, and number of worked days per month.

// Then, as an example of inheritance, taking the first class as a contructor, 
// I create another class called Provider, that inherits all the properties and then 
// are added other methods for this specific class.

// Of course, this is only an example, the information is different than 
// a real needed information or the information could be not usefull.   

// The example is shown below:


let Employee = function(firstName, lastName , employNumber, position){
    this.firstName=firstName;
    this.lastName=lastName;
    this.employNumber=employNumber;
    this.position = position;
    this.salary = 0;
};

Employee.prototype.monthlyPerceptions=function(monthDays){
    let perceptions= this.salary*monthDays;
    return perceptions;
}; 
Employee.prototype.changePosition = function(position){
    this.position= position;
};
Employee.prototype.changeSalary=function(salary){
    this.salary= salary;
};

Employee.prototype.clone = function() {
    return new this.constructor(this.firstName, this.lastName , this.employNumber, this.position);
  }

let employ2345= new Employee("Jesus", "Mendoza", 2345, "Engineer");
employ2345.changeSalary(1000);
console.log(employ2345.monthlyPerceptions(29));
employ2345.changeSalary(1600);
console.log(employ2345.monthlyPerceptions(29));

let employ2318= new Employee("Jonathan", "Cardenas", 2318, "Chemical");
employ2318.changeSalary(3000);
console.log(employ2318.monthlyPerceptions(30));

function Provider(first_name,last_name, providerNumber, itemNumber) {    
    Employee.call(this, first_name, last_name, providerNumber, itemNumber);
    this.itemNumber=itemNumber;
    this.itemDescription;
    this.lastPurchaseDate;
    this.itemPrice;
    this.quantity;
  }
  
Provider.prototype = Object.create(Employee.prototype);        // Is copied the prototype
Provider.prototype.constructor = Provider;                     // The constructor is changed 
  
Provider.prototype.setItemDescription=function(description){
    this.itemDescription= description;
}; 

Provider.prototype.setLastPurchaseDate=function(date){
    this.lastPurchaseDate= date;
}; 

Provider.prototype.setItemPrice=function(date){
    this.itemPrice= date;
}; 

Provider.prototype.setQuantity=function(quantity){
    this.quantity= quantity;
}; 

Provider.prototype.getInformation=function(){
    return [this.quantity, this.itemNumber, this.itemDescription, this.lastPurchaseDate,this.itemPrice,this.quantity];
}; 

  let provider1 = new Provider('Aaron', 'White', 1, 1535);      // Is created by the Provider constructor
  let provider2 = provider1.clone('Laura', 'Smith', 2, 38664);      // Is created and instance of Provider

  provider1.setItemDescription('Monitors');
  provider1.setItemPrice(900);
  provider1.setQuantity(8);
  provider1.setLastPurchaseDate(new Date);
  console.log(provider1.getInformation());

  provider2.setItemDescription('Security Glases');
  provider2.setItemPrice(30);
  provider2.setQuantity(200);
  provider2.setLastPurchaseDate(new Date);
  console.log(provider2.getInformation());

