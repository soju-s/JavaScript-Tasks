//common items present in two arrays
// r=[]
// p=[10,11,12,20,30]
// q=[11,20,21,30,31]
// console.log('the two arrays are',p,q);
// for(i=0;i<p.length;i++)
// {
//     for(j=0;j<q.length;j++)
//     {
//         if(p[i]==q[j])
//         {
//           r.push(p[i])
//         }   
//     }
// }
// console.log('common items present in array',r);




str=''
iscommon=false
p=[14,11,12,20,30]
q=[14,25,20,30,31]
console.log('the two arrays are',p,q);
for(i=0;i<p.length;i++)
{
    for(j=0;j<q.length;j++)
    {
        if(p[i]==q[j])
        {
         str=str+p[i]+'\t'
         iscommon=true
        }   
    }
}
if(!iscommon)
{
  console.log('there are no common items');
}
else{
  console.log('the common items are',str);
}