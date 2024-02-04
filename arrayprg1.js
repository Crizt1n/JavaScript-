// array :  we can hold more than one value in a single variable and it is separated by commas ,

weekdays=[ 'Monday','Tuesday','Wednesday','Thursday','Friday'] // if we need all the output we should give the data in array [] and using comma, inbetween the data
console.log(weekdays);

weekdays=[ 'Monday','Tuesday','Wednesday','Thursday','Friday',3,0.3 ,true,100,false] // we can also add more than one datatypes in one array 
console.log(weekdays);



/// find the total number of items in the given array
console.log(weekdays.length); // array in javascript is infinite


// print the first item of the array 
console.log(weekdays[0]);


// print the last item of the array
console.log(weekdays[9]);

// print  inbetween of the array
console.log(weekdays[5]);

//if we dont know the index number of the array use this method
console.log(weekdays[weekdays.length-1]);