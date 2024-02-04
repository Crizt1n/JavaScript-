expense=[12000,23000,40000,34000,55000,24000,10000,14000]

// find the lowest expense
lowest=expense[0]
for(let num of expense){
    if (num<=lowest){
        lowest=num
    }
}
console.log('The Lowest number in the array is ' ,lowest);

// find the highest expense 
highest=expense[0]
for(let number of expense){
    if(number>=highest)
    highest=number
}
console.log('The Highest number in the array is ', highest);

// find the total expense
sum=0
for(let total of expense)
{
    sum+=total
}
console.log('Total expense is ',sum);


