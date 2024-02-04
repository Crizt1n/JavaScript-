//w.a.p to display the reverse of the given number (if the given number is 1,2,3 { display as 3,2,1})

num=8963
remainder=0
sum=0

while (num>0) // 8963>0 //896>0 //89>0 //8>0
{
    remainder=num%10 // 8963%10=3//896%10=6 //89%10=9
    sum=sum*10+ remainder // 3 // 30+6// 360+9 //3690+8 
    num=parseInt(num/10) //  8963/10=896.3 ie,896  // 896/10=89.6 ie,89 // 89/10=8.9 ie,8

}
console.log('reverse of the number is ', sum);