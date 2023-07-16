// sum is 6
array2=[2,3,4,5]
isfound=false
console.log('the number in array are',array2);
a=6
for(i=0;i<array2.length;i++)
{
    for(j=i+1;j<array2.length;j++)
    {
       if(array2[i]+array2[j]==a)
       {
        isfound=true
       console.log('the numbers whose sum is 6 are',array2[i],array2[j]);
       }
    }
}
!isfound&&console.log('pair not found');