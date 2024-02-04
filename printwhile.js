// w.a.p to print 24 for the input 2 . 369 for input 3 and 4936 for input 4
// for that use concatenate 

//first pattern

input=4
i=0
str=''
sum=0

while(i<input) // 0<3 // 1<3 // 2<3 // 3<3
{
    str=str+input // concatenating the 'input' // 3 // 3+3=33 // 3+33 = 333
    console.log(str);
    sum=sum+ Number(str) // 'number' is used to convert the string to the number // 0+3=3// 3+33=36// 36+333 = 369
    i++
}
console.log('result is :',sum);


console.log('_______________________');

// second pattern


inp=4
j=1
str=('')
product=0

while(j<=inp)// 1<=4 //2<4 //3<4// 4<4
{
    str=str+j // 1 // 1+2=12 // 12+3=123 //123+4=1234
    j++ // 2 //3 //4
    console.log(str);

}
product=inp*str

console.log(product);