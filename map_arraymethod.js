// array method - Map()

a=[10,11,12,13,14,15]

//w.a.p to create a new array having square of the elements in the given array
//for of method 
for(let num of a){
    console.log(num**2);
}
console.log('____________________');


//for each method
a.forEach(num=>{
console.log(num**2);
})
console.log('____________________');

// map method
square=a.map(num=>num**2)
console.log(square);
console.log('____________________');


//w.a.p to create a new array having cube of the given elements in the given array 

cube=a.map(num=>num**3)
    console.log(cube);

console.log('____________________');

//w.a.p to create new array with numbers <=13 then increment >13 the decrement

b=a.map(num=>num<=13?num+1:num-1)
console.log(b);