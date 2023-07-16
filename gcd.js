// num1=6
// num2=12
// if(num1>num2)
// {
//     for(i=1;i<=num2;i++)
//     {
//         if(num1%i==0&&num2%i==0){
//             gcd=i
//         }
//     }
// }
// else{
//     for(i=1;i<=num1;i++){
//         if(num1%i==0&&num2%i==0){
//             gcd=i
//         }
//     }
// }
// console.log(`GCD(${num1},${num2})=${gcd}`);

num1=12
num2=60
for(i=1;i<=num2;i++)
{
    if(num1%i==0&&num2%i==0)
    {
      gcd=i
    }
}
console.log(gcd);