// W.A.P to find the given number is a palindrome

num=898
remainder=0
reverse=0
temp=num

while (num>0)
{
    remainder=num%10
    reverse=reverse*10+ remainder 
    num=parseInt(num/10)

}
console.log('reverse of the number is ', remainder);

if(temp==reverse)
{
    console.log('palindome');
}
else{
    console.log('not palindrome');
}