// expenses=[23000,34000,21000,45000,56000,12000]
// maxexpenses =0
// for(let amount of expenses)
// {
//     // amount>maxexpenses&&(maxexpenses=amount)
//     if(amount>maxexpenses)
//     {
//         maxexpenses=amount
//     }
// }
// console.log('maximum amount =',maxexpenses);


expenses=[23000,34000,21000,45000,56000,12000]
console.log('The expeses =',expenses);
for(i=1;i<expenses.length;i++)
{
    if(expenses[i]>expenses[0])
{
    expenses[0]=expenses[i]
}
    
}
console.log('The highest amount in the list=',expenses[0]);