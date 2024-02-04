//w.a.p to print common numbers from the given arrays (ans: 11,20,30)
p=[10,11,12,20,30]
q=[11,20,25,30,33]


isfound=false
for(let i of p)
{
    for(let j of q){
    if(i==j)
    {
        isfound=true
        console.log(i);
        break;
    }
}
}
!isfound&&console.log('no common elements');