// sum 6 using binary search
array2=[2,3,4,5]
pairSum=6
low=0
count=0
up=array2.length-1
isFound=false
array2.sort((a,b)=>a-b)
while(low<=up){
    count++
    curSum=array2[low]+array2[up]
    if(curSum==pairSum){
        isFound=true
         console.log('the pairs whose sum is six are',array2[low],array2[up]);
         low++
    }
    else if(curSum>pairSum){
        up--
    }
    else if(curSum<pairSum){
        low++
    }
}
console.log('count',count);
!isFound&&console.log('pair not found');