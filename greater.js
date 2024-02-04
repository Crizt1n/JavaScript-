// wap to display largest among the 3 different numbers?


num1=20
num2=200
num3=2000

if(num1>num2 && num1>num3)
{
    console.log(`${num1} is greater`);
}
else if(num2>num1 && num2>num3)
{ 
    console.log(`${num2} is greater `);
}

else if(num3>num1 && num3>num2)
{
    console.log(`${num3} is greater`);
}
 else{
    console.log('all are equal');
 }