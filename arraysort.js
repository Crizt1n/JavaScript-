// w.a .p to sort numbers in an array in ascending and decending order

arr=[22,21,10,11,12,3,4,2]
arr.sort((num1,num2)=>num1-num2)
console.log('ascending order',arr);
arr.sort((num1,num2)=>num2-num1)
console.log('decending order',arr); 