//w.a.p to display the numbers whose exponential is in the range  8-36 and user can input the power

power=1
num=1
while( num<=36){
    if(8<=num**power && 36>=num**power){
        console.log(num);
    }
    if(num**power==36){
        break // to forcefully exit the loop after the certain condition is met.!!
    }
    num++
}