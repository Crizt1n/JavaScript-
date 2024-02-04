// w.a .p to find the given number is armstrong or not
// i.e, 153 = 1**3+5**3+3**3=1+125+27=153

i=150
temp=i
remainder=0
sum=0

while(i>0)
{
    remainder=i%10
    sum=sum+(remainder**3)
    i=(i/10)
    i= parseInt(i/10)

}
 if( temp==sum)
 {
    console.log('armstrong');
 }
 else
 {
    console.log('not armstrong');
 }