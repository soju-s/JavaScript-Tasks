class Bank{
    accountDetails= {
        1000: { acno: 1000, username: "userone", password: "userone", balance: 50000 },
        1001: { acno: 1001, username: "usertwo", password: "usertwo", balance: 5000 },
        1002: { acno: 1002, username: "userthree", password: "userthree", balance: 10000 },
        1003: { acno: 1003, username: "userfour", password: "userfour", balance: 6000 }
    }

    //validate account number function

    validateAcnt(acno){
return acno in this.accountDetails?true:false
    }
    //authenticate account(acno,password)

    authenticateAcnt(acno,password){
        if(this.validateAcnt(acno)){
            
            if(this.accountDetails[acno].password==password){
                console.log('authentication sucessfull');
            }
            else{
                console.log('password incorrect');
            }
        }
       
        else{
            console.log('account is invalid');
        }

    }
    //balance enquiry function

balance(acno){
    if(this.validateAcnt(acno)){
    console.log( 'account balance = ',this.accountDetails[acno].balance);
    }
    else{
        console.log('invalid account');

    }
}

    //function for fund transfer

    transfer(fromacno,toacno,amount){
        if(this.validateAcnt(fromacno)&&this.validateAcnt(toacno)) {
            console.log(`balance of debit account ${fromacno} :${this.accountDetails[fromacno].balance}`);
            console.log(`balance of credit account${toacno} : ${this.accountDetails[toacno].balance}`);
            if(this.accountDetails[fromacno].balance>=amount){
                this.accountDetails[fromacno].balance-=amount
                this.accountDetails[toacno].balance+=amount
                console.log('transcation sucessfull');
                console.log(`balance of debit account ${fromacno} :${this.accountDetails[fromacno].balance}`);
                console.log(`balance of credit account${toacno} : ${this.accountDetails[toacno].balance}`);

            }
            else{
                console.log('insufficient balance');
            }
        }
        else {
            console.log('invalid account number');
        }

    }
}




b1=new Bank()
console.log(b1.validateAcnt(1000)?'valid':'not valid');
b1.authenticateAcnt(1000,'userone')
b1.balance(1000)
b1.transfer(1000,1002,2000)