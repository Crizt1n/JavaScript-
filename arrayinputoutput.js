//input =[4,5,6]
//output = [11,10,9]

//1st pattern
//5+6=11
//5+5=10
//5+4=9

//2nd pattern
//15-4
//15-5
//15-6

input=[4,5,6]
output=[]
sum=0
for(let num of input ){
    sum+=num
    console.log(num,sum);
}
for(let num of input){
    output.push(sum-num)
}
console.log(output);
