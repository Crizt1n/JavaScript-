// Array method - Filter()  - to create new array from the exixiting array with elements which satisfy certain condition

a=[10,11,12,13,14,15,16]

//w.a.p to display all the even numbers from the given  array
console.log('---------even numbers--------');
even=a.filter(num=>num%2==0)
console.log(even);

//w.a.p to display all the numbers which is greater than 13 from the given array
console.log('-------greater than 13-------');
greater=a.filter(num=>num>13)
console.log(greater);

//w.a.p to display all the numbers which is less than 13 from the given array
console.log('--------Less than 13---------');
less=a.filter(num=>num<13)
console.log(less);