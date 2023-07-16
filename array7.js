array1=[10,20,10,20,30,40,50]
array2=[]
console.log('the numbers in array are',array1);
for(i=0;i<array1.length;i++)
{
    for(j=i+1;j<array1.length;j++){
        if(array1[i]==array1[j]){
            a=array1[i]
            array2.push(a)
        }
    }
}
console.log('the common numbers in array are',array2);