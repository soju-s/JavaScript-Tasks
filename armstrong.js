a=54748
d=a
e=a
sum=0
n=0
console.log('The number is =',a);
while(e>0)
{
n++
e=Math.floor(e/10)
}
while(a>0)
{
b=a%10
c=b**n
sum=sum+c
a=Math.floor(a/10)
}
console.log('Output =',sum);
console.log(sum==d?'The number is armstrong':'the number is not armstrong');