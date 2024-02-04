arr=[10,20,10,20,20,30,40,50,70,60,50]

//print the number count

obj={}

for(num of arr){
    if( num in obj){
        obj[num]+=1
    }
    else{
        obj[num]=1
    }
}
console.log(obj);

console.log('-------------------------------------------');

// array method

obj1={}
arr.forEach(num=>num in obj1?obj1[num]+=1 : obj1[num]=1)
console.log(obj1);