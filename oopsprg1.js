//creation of class

class Employee{
    //property = variable inside class
    empId
    empName
    empDesg
    empSalary
    //constructors = property initialize
    constructor(id , ename , desg,salary){
        this.empId=id   // instant variable
        this.empName=ename
        this.empDesg=desg
        this.empSalary=salary

    }
    //methods = function inside a class
    display(){
        console.log(`employee id is ${this.empId},employee name is ${this.empName},employee designation is ${this.empDesg},employee salary is ${this.empSalary}`);
    }
}

// creation of objects

const emp1= new Employee(1000,"max","developer",25000)  // emp1 is called as reference (memory locations where properties are stored)
emp1.display()

const emp2= new Employee(1001,"manu","tester",35000) 
emp2.display()