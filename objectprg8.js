products=[
    {pid:100,pName:'apple',band:'5g',price:120000,display:'led'},
    {pid:101,pName:'samsaung',band:'5g',price:45000,display:'led'},
    {pid:102,pName:'blackberry',band:'4g',price:50000,display:'led'},
    {pid:103,pName:'nokia',band:'3g',price:1200,display:'lcd'},
    {pid:104,pName:'motorola',band:'4g',price:10000,display:'lcd'}
]

//1. print product name only

console.log('-----------PRODUCT NAME-----------');

for(let item of products){
    console.log(item.pName);
}

//Array method
console.log('---------PRODUCT NAME(Array Method)-----------');

products.map(data=>data["pName"]).forEach(item=>console.log(item))

//2. print all mobile details whose display is lcd

console.log('-----------DETAILS OF LCD MOBILES-----------');

for(let item of products){
    if (item.display=='lcd')
    console.log(item);
}

console.log('-----------DETAILS OF LCD MOBILES(Array method)-----------');

products.filter(data=>data.display=='lcd').forEach(item=>console.log(item.pName))


//3. print 5g mobile phone name

console.log('-----------5G MOBILE NAME-----------');

for(let item of products){
    if(item.band=='5g')
    console.log(item.pName);
}

console.log('-----------5G MOBILE NAME(Array Method)-----------');


products.filter(data=>data.band=="5g").forEach
(item=>console.log(item.pName))


//4. sort mobile based on price

console.log('-----------MOBILE BASED ON PRICE-----------');
item={}
products.sort((num1,num2)=>num2.price-num1.price).forEach(item=>{console.log(item.pName);})



//5. print costly mobile

console.log('-----------COSTLY MOBILE-----------'); 

highcost=products.reduce((num1,num2)=>num1.price>num2.price? num1 : num2)
console.log(highcost.pName);


//6. print low cost mobile

console.log('-----------LOW COST MOBILE-----------');
   
lowcost=products.reduce((num1,num2)=>num1.price<num2.price?num1:num2)
console.log(lowcost.pName);