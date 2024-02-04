//[ no, district,  +ve cases,  death rate,  curred rate,  1st dose vaccine,  2nd dose vaccine]
covid_data = [
    [1,  'Ernakulam',  34000,  2000,  23000,  20000,  2000],
    [2,  'Idukki',     14000,  3000,  25000,  30000,  1000],
    [3,  'Thrissur',   24000,  4000,  33000,  24000,  2500],
    [4,'Pathanamthitta',20000, 2000,  45000,  22000,  1500],
    [5,  'Kozhikode',   44000,  5000,  12000, 21000,  500],
    [6,  'Palakkad',   12000,  1000,  20000,  23000,  3400],
    [7,  'Kottayam',  27000,  1500,  27000,  14000,  1000],
    [8,  'Kollam',    14000,  2500,  25000,  18000,  2700]

]
//1. district having Highest +ve case 

console.log('District having Highest +ve case');
highest=covid_data.reduce((num1,num2)=>num1[2]>num2[2]? num1 : num2)
console.log(highest[1]);
console.log('-----------------------------');


//2. district having Highest 1st dose vaccine

console.log('District having Highest 1st dose Vaccine');
highvac=covid_data.reduce((num1,num2)=>num1[5]>num2[5]? num1 : num2)
console.log(highvac[1]);
console.log('-----------------------------');


//3. district having lowest death rate

console.log('District having Lowest Death rate');
lowest=covid_data.reduce((num1,num2)=>num1[3]<num2[3]? num1 : num2)
console.log(lowest[1]);
console.log('-----------------------------');


//4. sort data with +ve case in descending order

console.log('Positive Case in decending Order');
decending=covid_data.sort((num1,num2)=>num2[2]-num1[2]).forEach(decending=>{console.log(decending[1]);})
console.log('-----------------------------');


//5. is district with +ve cases > 15000

console.log('Is there any District with +ve Cases >15000');
cases=covid_data.some(num=>num[2]>15000)
console.log(cases? 'yes':'no');
console.log('-----------------------------');



//6. sort data with 1st dose vaccine in ascending order 

console.log('Sorted data with 1st dose vaccine in ascending order');
vaccine=covid_data.sort((num1,num2)=>num1[5]-num2[5])
console.log(vaccine);
console.log('-----------------------------');

//7. Print Thrissur details

console.log('Thrissur Details');
details=covid_data.find(num=>num[1]=='Thrissur')
console.log(details);
console.log('-----------------------------');

//8. Print total number of positive cases

console.log('Total number of Positive Cases');
total=covid_data.map(cases=>cases[2]).reduce((num1,num2)=> num1+num2)
console.log(total);
console.log('-----------------------------');

//9. Print total number of curred cases

console.log('Total number of curred Cases');
cured=covid_data.map(cases=>cases[4]).reduce((num1,num2)=> num1+num2)
console.log(cured);
console.log('-----------------------------');

//10. Print curred cases in Idukki

console.log('Cured Cases of idukki');
idukki=covid_data.find(num=> num[1]=='Idukki')
console.log(idukki[4]);
console.log('-----------------------------');
