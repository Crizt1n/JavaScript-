// w.a.p to print whose sum is 6 (ans: 2,4)

// Linear Search Method

console.log('-----------In Linear search Method-------------');

b= [2,3,4,5]

pairsum=6
isfound=false
count=0
for (i=0;i<b.length;i++){
    for(j=i+1;j<b.length;j++){
        count++
        if(b[i]+b[j]==pairsum){
            isfound=true
            console.log(`(${b[i]},${b[j]})`);

        }
    }
}
console.log(count);
!isfound&&console.log('no such pair');

console.log('-----------In Binary search Method-------------');

// Binary search method

pair=6
found=false
count=0
low=0
up=b.length-1


while(low<up){
    count++
    currsum=b[low]+b[up]

    if(currsum==pair){
        found=true
        console.log(`(${b[low]},${b[up]})`);
        low++
    }
    else if(currsum>pair){
        up--
    }
    else if(currsum<pair){
        low++
    }

}

console.log(count);
!found&&console.log('No such pair exists !');

