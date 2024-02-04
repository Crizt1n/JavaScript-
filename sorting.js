//W A P  to display the second largest number from the given 3 numbers and also sort three numbers in decending order.?

num1=10
num2=20
num3=15

if(num1>num2 && num1>num3)
{ 
    if(num2>num3){
         console.log(`${num2} is the second largest number`);
         console.log(`sort in decending: ${num1}, ${num2}, ${num3}`);
        }
         else{
            console.log(`${num3} is the second largeset `);
            console.log(`sort in decending: ${num1}, ${num3}, ${num2}`);


         }
}
else if(num2>num1 && num2>num3)
{
    if(num1>num3){
        console.log(`${num1} is the second largest number`);
        console.log(`sort in decending: ${num2} ,${num1} ,${num3}`);


    }
    else{
        console.log(`${num3} is the second largeset `);
        console.log(`sort in decending: ${num2}, ${num3}, ${num1}`);

    }
}

else if( num3>num1 && num3>num2)
{
    if(num1>num2){
    console.log(`${num1} is the second largest number`);
    console.log(`sort in decending: ${num3} ,${num1} ,${num2}`);}
    else{
        console.log(`${num3} is the second largeset `);
        console.log(`sort in decending: ${num2}, ${num3}, ${num1}`);


    }



}
