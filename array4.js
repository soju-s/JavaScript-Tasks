// expenses=[23000,34000,21000,45000,56000,12000]
// minexpenses=expenses[0]
// for(let amount of expenses)
// {
//    if(amount<minexpenses)
//    {
//     minexpenses=amount
//    }
// }
// console.log('min expenses=',minexpenses);


expenses=[23000,34000,21000,45000,56000,12000]
console.log('the sxpenses=',expenses);
for(i=1;i<expenses.length;i++)
{
   if(expenses[0]>expenses[i])
   {
      expenses[0]=expenses[i]
   }
}
console.log('The least amount in the list=',expenses[0]);