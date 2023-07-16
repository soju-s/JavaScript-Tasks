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

console.log('total number of accounts',accounts.length);


//2. print account number whose ac_type is savings

console.log('account number whose ac_type is savings :');
accounts.filter(a=>a.ac_type=='savings').forEach(item=>console.log(item.acno))

//3.print the balance of accnount number 1000

console.log('balance of accnount number 1000');
a=accounts.find(a=>a.acno==1000)

// console.log(a=accounts.find(a=>a.acno==1000).balance);

console.log(a.balance);

//4. print all gpay transactions


console.log('all gpay transactions :');
console.log(accounts.map(a=>a.transaction).flat(Infinity).filter(b=>b.mode=='gpay'));

//5. print all transaction whose amount > 5000

console.log('all transaction whose amount > 5000 :');
console.log(accounts.map(a=>a.transaction).flat(Infinity).filter(b=>b.amount>5000));

//6. print credit transaction of account 1002

console.log('credit transaction of account 1002');
cred=accounts.map(a=>a.transaction).flat(Infinity).filter(b=>b.to==1002)
console.log(cred);

//7. print debit transaction of account 1002

console.log('debit transaction of account 1002');
deb=accounts.find(a=>a.acno==1002).transaction
console.log(deb);

//8. print transaction history of 1002

console.log('transaction history of 1002');
historyTrans={credit:cred,
debit:deb}
console.log(historyTrans);

//9. print highest balance account details

console.log('highest balance account details');
c=accounts.reduce((a,b)=>a.balance>b.balance?a:b)
console.log(`${c.acno} has the highest balance is ${c.balance}`);