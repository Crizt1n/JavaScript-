//functions overloading using spread 

function add(...arg){
    console.log(arg);
    console.log("sum :",arg.reduce((n1,n2)=>n1+n2))
}

add(10,20,60,58,50)