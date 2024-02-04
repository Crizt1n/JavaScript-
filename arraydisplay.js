array = ['apple','pineapple','strawberry','kiwi']
console.log(array);

// first way to display the array items using for loop

for(index=0;index<array.length;index++)
{
    console.log(array[index]);
}

console.log('-------------------------------------');

// by using for in method

for (let i in array){
    console.log(array[i]);
}

console.log('-------------------------------------');

// by using for of method 

for(let fruits of array)
{
    console.log(fruits);
}