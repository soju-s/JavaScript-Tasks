i=1
input=2
sum=0
term=0
console.log('input=',input);
// while(i<=input)
// {
//     term=term*10+input
//     sum=sum+term
//     i++
// }
// console.log('outout=',sum);

str=''
while(i<=input)
{
    str=str+input
    sum=sum+Number(str)
    i++
}
console.log(sum);