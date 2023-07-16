x=123
z=x
y=0
str=''
console.log('the numbers =',x);
while(x>0)
{
    y=x%10
    str+=y
    x=Math.floor(x/10)
}
console.log("Reversed number is :" ,Number(str))
console.log(z==Number(str)?'the number is palindrome':'the number is not palindrome' );
