// program to find the largest among two numbers 

a=400
b=4000
if(a>b)
{console.log('a is the largest',a);}

else if(a==b) {
    console.log('both are equal', a ,b);
    
} 
else{
    console.log('b is the largest',b);
}
//ternary

console.log(a>b ? 'greater': 'smaller');