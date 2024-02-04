//[1000,'Neel','developer','kochi',25000,3]
// using object method

employee={
    empid:100,
    empname:"Neel",
    empdesig:"developer",
    location:"kochi",
    empsalary:25000,
    experience:3
}
console.log(employee);

// displaying items in an objects

console.log(`employee name is ${employee.empname}`);
console.log(`employee name is ${employee["empname"]}`);

// display location of the given employee
console.log(`employee location is ${employee["location"]}`);

for(let key in employee)
console.log(key);

for(let key in employee)
console.log(employee[key]);

// check whether the employee loaction is present or not , if present print available else print not available 

console.log(`employee location is ${"location" in employee? 'available':'not available'}`);


/* // for adding items to the object

employee["gender"]="Male"
console.log(employee); */

// adding after checking 

"empgender" in employee? console.log('present'): employee["empgender"]="male"
console.log(employee);