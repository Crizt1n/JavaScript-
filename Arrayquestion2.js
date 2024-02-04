//nested array

//[id, name, designation, location, salary, experience]

employee =[ 
    [1000,'Neel','developer','kochi',25000,3],
    [1001,'Max','tester','TVM',20000,2],
    [1002,'MAxwell','QA','kochi',35000,4],
    [1003,'Vyom','QA','kochi',45000,5],
    [1004,'Laisha','tester','TVM',55000,7],
    [1005,'Aahan','developer','TVM',15000,1],
    [1006,'Aahil','QA','kochi',20000,2],
    [1007,'Shayan','developer','kochi',30000,3],
    [1008,'Nihaan','developer','TVM',25000,3]
]

// print all employee name 

console.log('All employee name :');
/* empname=employee.map(emp=>emp[1]) */ //(using map )
 employee.forEach(employ=> {console.log(employ[1]);})  // (using forEach)

//print total numbers of employee

console.log('--------------------------');
console.log('Total number of employees');
console.log(employee.length);

//print developer employee details

console.log('--------------------------');
console.log('Developer employee details');
developer=employee.filter(num=> num[2]== 'developer')
console.log(developer);


//print employee whose salary > 30000

console.log('--------------------------');
console.log('Employee salary > 30000');
salary=employee.filter(num=>num[4]>30000)
console.log(salary);

//print employee whose salary > 30000

console.log('--------------------------');
console.log('Employee salary > 30000');
salary=employee.filter(num=>num[4]>30000).forEach(employ=>{console.log(employ[1]);})


// print details of employee Laisha

console.log('--------------------------');
emp=employee.filter(num=> num[1]=='Laisha')
console.log(emp);

//sort employee based on their salary in descending order
 
employee.sort((num1,num2)=> num2[4]-num1[4])
console.log(employee);

//sort employee based on their experience in ascending order

console.log('--------------------------');
console.log('Sort of Employee based on their Experience in Ascending Order');
employee.sort((num3,num4)=> num3[4]-num4[4])
console.log(employee);

// print the employ name whose have the higest salary

console.log('--------------------------');
console.log('Employee who have Highest Salary');
highest=employee.reduce((num1,num2)=> num1[4]>num2[4]?num1:num2)
console.log(highest[1]);

//print the employee name who have the Least salary

console.log('--------------------------');
console.log('Employee who have Lowest Salary');
least=employee.reduce((num1,num2)=> num1[4]<num2[4]?num1:num2)
console.log(least[1]);

//print the total salary expense of the Company

console.log('--------------------------');
console.log('Total Salary expense of the company');

total=employee.map(salary=>salary[4]).reduce((salary1,salary2)=> salary1+salary2)
console.log(total);
