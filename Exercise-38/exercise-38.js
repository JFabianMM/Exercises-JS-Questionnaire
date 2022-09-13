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
// able to change the dayly salary, the position and a given level in 
// that position 

// The example is shown below:

let Employee = function(firstName, lastName , employNumber, position, daylySalary, level){
    this.firstName=firstName;
    this.lastName=lastName;
    this.employNumber=employNumber;
    this.position = position;
    this.salary = daylySalary;
    this.level = level;
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

Employee.prototype.changeLevel=function(level){
    this.level= level;
};

let employ2345= new Employee("Jesus", "Mendoza", 2345, "Sr Engineer", 1500, 3);

console.log(employ2345.monthlyPerceptions(29));
employ2345.changeSalary(1600);
console.log(employ2345.monthlyPerceptions(29));

let employ2318= new Employee("Antony", "Cardenas", 2318, "Jr Engineer", 1000, 1);
console.log(employ2318.monthlyPerceptions(30));