class Bank{
    accountDetails={
        1000:{acno:1000, username:"userone", password:"userone", balance:50000},
        1001:{acno:1001, username:"usertwo", password:"usertwo", balance:5000},
        1002:{acno:1002, username:"userthree", password:"userthree", balance:10000},
        1003:{acno:1003, username:"userfour", password:"userfour", balance:6000},
    }

  

    //method to validate given account number
    validateAccount(acno){
       
       return acno in this.accountDetails? true:false
    }
    //method to authenticate a account
    authenticateAccount(acno,pswd){
        if(this.validateAccount(acno)){
            if(this.accountDetails[acno].password==pswd){
                console.log('Authentication Successfull');
            }
            else{
                console.log('Authentication Unsuccessful');
            }
        }
    else{
        console.log('Invalid Account No.');
    }
    }
    //method to balance enquiry 
    getbalance(acno,pswd){
        if(this.validateAccount){
            if(this.accountDetails[acno].password==pswd){
                console.log(`Current Balance of ${acno} is : ${this.accountDetails[acno].balance}`);
            }
            else{
                console.log('Invalid Password !');
            }

        }
        else{
            console.log('Invalid Account');
        }
    }



    //method to transfer fund
    fundtransfer(fromacno,toacno,amount){
        if(this.validateAccount(fromacno) && this.validateAccount(toacno)){
            if(this.accountDetails[fromacno].balance>=amount){
                console.log(`Current balance of ${fromacno} is : ${this.accountDetails[fromacno].balance}\n
                Current balance of ${toacno} is : ${this.accountDetails[toacno].balance}`);
                console.log(`Amount Transferred is : ${amount}`);
                this.accountDetails[fromacno].balance-=amount
                this.accountDetails[toacno].balance+=amount
                console.log(`Final Balance of ${fromacno} is : ${this.accountDetails[fromacno].balance}\n
                Final Balance of ${toacno} is : ${this.accountDetails[toacno].balance}`);

            }
            else{
                console.log('Insufficient Balance');
            }
        }
        else{
            console.log('invalid Accounts');
        }
    }

}

//Objects 

console.log('---------Validate Given Acount Number - 1000 ---------');
const user1 = new Bank()
console.log(user1.validateAccount(1000)? 'Account Available':'Not Available');

console.log('----------Authenticate a Account----------');
user1.authenticateAccount(1000,"userone")

console.log('----------Balance Enquiry----------');
user1.getbalance(1001,"usertwo")

console.log('---------Fund Transfer---------');
user1.fundtransfer(1000,1001,2000)