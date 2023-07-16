// n=13
// isPrime=true
// for(i=2;i<n;i++)
// {
//    if(n%i==0)
//    {
//    isPrime=false
//    break
//    }
// }
// console.log(isPrime?`${n} is a prime number`:`${n} is not prime number`);

p=0
n=5
console.log('the number =',n);
for(i=2;i<n;i++)
{
    if(n%i==0)
    {
        p=i
    }
}
console.log(p==0?'the number is prime':'the number is not prime');