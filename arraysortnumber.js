var arr =[10,11,12,3,4,2]

//algorithm

//sort the array
// repeat until low < upwhile
//find mid (mid=low+up/2)

 //compare
   // mid == searchitem - present
   // mid>searchitem
   // up =mid-1
   // mid<searchitem
   // low = mid-1


   searchitem=12
   low=0
   up =arr.length-1
   ispresent=false

   arr.sort((num1,num2)=> num1-num2)
   console.log(arr);

   count=0

   while(low<=up){
    count++
    mid= Math.floor((low+up)/2)

    if(arr[mid]==searchitem){
        ispresent=true
        break
    }
   else if(arr[mid]> searchitem){
   up = mid-1

}
else if(arr[mid]< searchitem){
    low = mid+1
}
   }
console.log(count);
console.log(ispresent? 'present': 'not present');

