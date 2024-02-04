//w.a.p to print numbers less than 10 in the given array (ans: 2,4,7,9)

a=[[10,23],[34,56],[2,4],[57,89],[7,9]]

for(let num of a){  
    
    for(let n of num){
       if(n<10)
       console.log(n);
    }
}