var num1=20
var num2=30
var temp
console.log(`value of num1 and num2 before swap is ${num1} and ${num2}`);

//asssign num 1 to temp
temp =num1
//assign num1 to num2
num1 =num2
//assign num 2 to temp
num2=temp
//display num1 and num2
console.log(`value of num1 and num2 after swap is ${num1} and ${num2}`);
console.log('------------------------------------');

//another way of doing 


num3=20
num4=30
console.log(`value of num3 and num4 before swap is ${num3} and ${num4}`);

num3=num3+num4// num3 is 50
num4=num3-num4// num 4 is 20
num3= num3-num4//num 3 is 30
console.log(`value of num3 and num4 after swap is ${num3} and ${num4}`);
