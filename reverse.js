input=479
str=''
console.log('the number = ',input);
while(input>0)
{
    output=input%10
    str+=output
    input= Math.floor(input/10)
   
}
console.log('the number in reverse =',Number(str));
