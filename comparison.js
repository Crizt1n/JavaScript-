/* comparison operator /relational operators*/


var num=10
var num1=10/* if the value is in a string type , o/p will be false */
console.log(`${num} is equal to ${num1} : ${num===num1}`);/* if == is given it checks only the number, === checks the type also */

//output will be boolean


//logical operators

a=30

console.log('5<a<20', 5<a && a<20);
console.log('5<a<20', 5<a || a<20);
console.log('----------------------------------');

a=10

console.log('5<a<20', 5<a && a<20);
console.log('5<a<20', 5<a || a<20);
console.log('----------------------------------');

//short hand operators

var short =10
short+=30 // i.e; short =short +30
console.log('result is',short);
console.log('----------------------------------');


// increment operators

inc =10
inc++
console.log('increment is', inc)
console.log('----------------------------------');
dec=10
dec--
console.log('decrement is', dec);
console.log('----------------------------------');

//posiotion is important

inc1=10
console.log('initial value ', inc1);
console.log('current value', inc1++);
console.log(' latest value',inc1);
console.log('----------------------------------');
inc1=10
console.log('initial value ', inc1);
console.log('current value', ++inc1);
console.log(' latest value',inc1);