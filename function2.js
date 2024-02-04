function num(num1)
{
    if(    result= num1>0
        ){
    console.log( 'positive');}

    else if(result==0){
        console.log('neither positive nor negative, its zero.!');
    }
    else{
        console.log('negative');

    }
}

num(0)
num(3)  


// or


function posneg(num2)
{
    return num2==0 ? 'neither positive nor negative' : num2>0 ?'positive ': 'neagtive'

}

console.log(posneg(-10));