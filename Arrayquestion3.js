//[id,name,price,stock]
products=[
    [1,'hide and seek',50,20],
    [2,'lays',20,80],
    [3,'oreo',40,100],
    [4,'parleG',25,10],
    [5,'tiger',20,30],
    [6,'unibic',60,0],
    [7,'good day',70,20]

]


//1.  Display all product name.

console.log('_____________________________');
console.log('All product Name');
pr=products.map(name=>name[1]).forEach(pr=>{console.log(pr);})

//2.  Display product whose price < Rs.50.

console.log('_____________________________');
console.log('Product price < Rs.50');
price=products.filter(num=>num[2]<50).forEach(price=>{console.log(price[1]);})


//3.  Print price of oreo.

console.log('_____________________________');
console.log('Price of Oreo');
oreo=products.find(num=>num[1]=='oreo')
console.log(oreo[2]);

//4.  Print costly product name.

console.log('_____________________________');
console.log('Costly Product :');
costly=products.reduce((num1,num2)=>num1[2]>num2[2]?num1:num2)
console.log(costly[1]);

//5.  Display out of stock product.

console.log('_____________________________');
console.log('Out of stock Product');
out=products.filter(num=>num[3]==0).forEach(out=>{console.log(out[1]);})  // if find() is used, only the 1st element of the satisfied condition will be printed


//6.  Sort products based on stock in decsending order.

console.log('_____________________________');
console.log('Sort of products based on decending order');
products.sort((num1,num2)=> num2[3]-num1[3]).forEach(decending=>{console.log(decending[1]);})


//7.  Print product having maximum available stock.

console.log('_____________________________');
console.log('Products having maximun available stock');
max=products.reduce((num1,num2)=>num1[3]>num2[3]?num1:num2)
console.log(max);


//8.  Is there any product that can be purchased by Rs. 10.

console.log('_____________________________');
console.log('Any products that can be purchased by Rs.10');
proprice=products.some(pro=>pro[2]<10)
console.log(proprice ? 'yes' : 'no');


//9.  Is there any product in the range of 10 to 30 Rs.

console.log('_____________________________');
console.log('Any products that can be purchased by Rs.10 to RS.30');
range=products.some(pro=>pro[2]>=10 && pro[2]<=30)
console.log(range ? 'yes' : 'no');

//10. Print all products in the range of 10 to 30 Rs.
console.log('_____________________________');
console.log('All products that can be purchased in range of Rs.10 to Rs.30');
prorange=products.filter(pro=>pro[2]>=10 && pro[2]<=30).forEach(prorange=>{console.log(prorange[1]);})
