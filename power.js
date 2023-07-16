// n=2
// i=1
// str=''
// while(i<=36)
// {
//    a=i**n
//    if(a>=8&&a<=36)
//    {
//     console.log(i);
//    }
//    i++
  
// }
power=2
number=1
low=8
up=36
while(number<36)
{
   low<=number**power&&up>=number**power&&console.log(number);  
   // truthy operator
   number++
}