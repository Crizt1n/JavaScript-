//w.a.p to print common numbers from the given arrays (ans: 11,20,30) using binary search method

p=[10,11,12,20,30]
q=[11,20,25,30,33]

a=0
b=0
ispresent=false
count=0

while(a<p.length && b<q.length){
    count++
    if(p[a] ==q[b]){
        ispresent=true
        console.log(p[a]);
        a++
        b++
    }
    else if(p[a] > q[b]){
        b++
    }
    else if(p[a] < q[b]){
        a++
    }
}
console.log(count);
!ispresent&&console.log('no coommon elements');