input=[4,5,6]
// output=[]
// a=0
// for(let sum of input)
// {
//     a+=sum
// }
// for(let sum of input){
//    output.push(a-sum) 
// }

// console.log(output);

console.log('input=',input);
sum=0
a=[]
for(i=0;i<input.length;i++)
{
sum=sum+input[i]
}
for(i=0;i<input.length;i++)
{
    output=sum-input[i]
    a.push(output)
}
console.log('output=',a);