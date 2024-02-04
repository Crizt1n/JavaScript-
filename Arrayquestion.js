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

console.log('--------------------------');
console.log('All employee name');
for(let emp of employee){
    console.log(emp[1]);
}

//print total numbers of employee

console.log('--------------------------');
console.log('Total number of employees');
console.log(employee.length);

//print developer employee details

console.log('--------------------------');
console.log('Developer employee details');
for(let emp of employee){
    if(emp[2]=='developer'){
        console.log(emp);
    }
}


//print employee whose salary > 30000

console.log('--------------------------');
console.log('Employee salary > 30000');
for(let emp of employee){
    if(emp[4]>30000){
        console.log(emp);
    }
}

//print employee name whose salary > 30000

console.log('--------------------------');
console.log('Employee name whose salary > 30000');
for(let emp of employee){
    if(emp[4]>30000){
        console.log(emp[1]);
    }
}

// print details of employee Laisha

console.log('--------------------------');
console.log('Details of Employee Laisha');
for(let emp of employee){
    if(emp[1]=='Laisha'){
        console.log(emp);
    }
}

//sort employee based on their salary in descending order

console.log('--------------------------');
console.log('Sort of employee based on their Salary in Decending Order');
employee.sort((num1,num2)=> num2[4]-num1[4])
console.log(employee);

 
//sort employee based on their experience in ascending order

console.log('--------------------------');
console.log('Sort of Employee based on their Experience in Ascending Order');
employee.sort((num3,num4)=> num3[4]-num4[4])
console.log(employee);

// print the employ name whose have the higest salary

console.log('--------------------------');
console.log('Name of the Employe who have highest salary');
employee.sort((num1,num2)=> num2[4]-num1[4])
console.log(employee[0][1]);