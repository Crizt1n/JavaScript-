numbers=[
    [10,20,[34,57]],
    [30,40],
    [50,[63,89],60],
    [23,56],
    [100,45]
]


// find the numbers greater than 50

console.log('-------------------------------');
console.log('NUMBERS GREATER THAN 50');
console.log(numbers.flat(Infinity).filter(num=>num>50))
console.log('-------------------------------');


// find the largest number

console.log('LARGEST NUMBER');
console.log(numbers.flat(Infinity).reduce((num1,num2)=>num1>num2 ? num1:num2));
console.log('-------------------------------');
 
// find the smallest numbers

console.log('SMALLEST NUMBER');
console.log(numbers.flat(Infinity).reduce((num1,num2)=>num1<num2 ? num1:num2));
console.log('-------------------------------');

// find the total sum of all numbers

console.log('SUM OF ALL NUMBERS');
console.log(numbers.flat(Infinity).reduce((num1,num2)=>num1+num2));
console.log('-------------------------------');