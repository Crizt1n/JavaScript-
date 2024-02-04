// linear search ; this process done in this program is known as linear search, it consumes more time for output

//check whether the the array contains the number 2 or not

var arr=[10,11,12,2,3,4,56]

num= 2
found=false
for(let item of arr){
    if(item==num )
    {
        found=true
        console.log(num,' is Present');
        break;
    }
  
} 
if(found==false){
    console.log('not present');
}

// or this method can also be used

!found&&console.log('number not found');





// binary search method




