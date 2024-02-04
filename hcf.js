//w.a.p to find GCD/HCF of a given 2 numbers
// 12 - 1 2 3 4 6 16
// 28 - 1 2 4 7 14 28

// 1 2 4 are the common factors 

num1=12
num2=30

hcf=0
for(i=1; i<num1 && i<num2;i++)
{
    if(num1%i==0 && num2%i==0){
        hcf=i
    }
}
console.log(hcf);


