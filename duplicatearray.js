//w.a.p to print the duplicate element from the given array (ans: 10,20,30)
 a= [10,20,30,40,50,60,10]

isduplication=false
for(i=0;i<a.length;i++){
    for(j=i+1;j<a.length;j++){
        if(a[i]==a[j]){
            isduplication=true
            console.log(a[j]);
            break;
        }
    }
}
!isduplication&&console.log('no duplication');