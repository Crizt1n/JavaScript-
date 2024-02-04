accounts=[
    {
        acno:1000,ac_type:'savings',balance:45000,transaction:[
            {
                to:1001,amount:5000,msg:'ebill',mode:'gpay'
            },
            {
                to:1002,amount:2000,msg:'emi',mode:'neft'
            },
            {
                to:1003,amount:1000,msg:'recharge',mode:'phonePay'
            },
        ]
    },
    {
        acno:1001,ac_type:'current',balance:30000,transaction:[
            {
                to:1000,amount:1000,msg:'grossary',mode:'gpay'
            },
            {
                to:1002,amount:7000,msg:'gift',mode:'phonePay'
            },
            {
                to:1003,amount:10000,msg:'emi',mode:'neft'
            },
        ]
    },
    {
        acno:1002,ac_type:'fixed',balance:100000,transaction:[
            {
                to:1000,amount:5000,msg:'ebill',mode:'gpay'
            },
            {
                to:1001,amount:2000,msg:'emi',mode:'neft'
            },
            {
                to:1003,amount:1000,msg:'recharge',mode:'phonePay'
            },
        ]
    },
    {
        acno:1003,ac_type:'savings',balance:30000,transaction:[
            {
                to:1001,amount:5000,msg:'ebill',mode:'gpay'
            },
            {
                to:1002,amount:2000,msg:'emi',mode:'neft'
            },
            {
                to:1000,amount:1000,msg:'recharge',mode:'phonePay'
            },
        ]
    }
]


//1. total number of accounts

console.log('---------TOTAL NUMBER OF ACCOUNTS------------');

total=accounts.length
console.log(total);

//2. print account number whose ac_type is savings

console.log('--------ACCOUNT NUMBER WHOSE ACC-TYPE IS SAVINGS---------');

accounts.filter(num=>num.ac_type=='savings').forEach(type=>{console.log(type);})

//3.print the balance of accnount number 1000

console.log('--------BALANCE OF ACCOUNT NUMBER: 1000 ---------');

accounts.filter(bal=>bal.acno==1000).forEach(balno=>{console.log(balno.balance);})  //We can also use find array method instead of filter

//4. print all gpay transactions

console.log('-----------ALL GPAY TRANSACTIONS------------');

accounts.map(data=>data.transaction).flat().filter(item=>item.mode=='gpay').forEach(item=>console.log(item)); 

//5. print all transaction whose amount > 5000

console.log('----------ALL TRANSCATION WHOSE AMOUNT IS > 5000 ----------');

accounts.map(data=>data.transaction).flat().filter(num=>num.amount>5000).forEach(item=>console.log(item))
 
//6. print credit transaction of account 1002

console.log('----------CREDIT TRANSACTION OF ACCOUNT NUMBER 1002 ----------');

credittrans=accounts.map(data=>data.transaction).flat().filter(item=>item.to==1002)
console.log(credittrans);
 
//7. print debit transaction of account 1002

console.log('---------DEBIT TRANSACTION OF ACCOUNT NUMBER 1002 ----------');

debittrans=accounts.find(data=>data.acno==1002).transaction
console.log(debittrans);

//8. print transaction history of 1002

console.log('--------TRANSACTION HISTORY OF 1002 ---------- ');

transhistory={
    credit:credittrans,
    debit:debittrans
}
console.log(transhistory);


//another method

console.log('--------ANOTHER METHOD---------');

hist=[...credittrans,...debittrans] //spred operator
console.log(hist);

//9. print highest balance account details

console.log('-------HIGHEST BALANCE ACCOUNT DETAILS--------');

console.log(accounts.reduce((data1,data2)=>data1.balance>data2.balance?data1:data2).acno); 