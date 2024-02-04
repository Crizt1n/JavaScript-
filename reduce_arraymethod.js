// array method - Reduce()

a=[30,32,53,14,55,60,47]

// find the highest value

console.log('__________highest____________');

highest=a.reduce((num1,num2)=> num1>num2?num1:num2)
console.log(highest);

// find the lowest value 

console.log('__________Lowest_____________');
lowest=a.reduce((num1,num2)=>num1<num2?num1:num2)
console.log(lowest);

// find the total value

console.log('___________Total_____________');
total=a.reduce((num1,num2)=>num1+num2)
console.log(total);