array2=[2,3,4,5,6,7]
keysum=8
low=0
up=array2.length-1
array2.sort((a,b)=>a-b)
while(low<=up){
    if( array2[low]+array2[up]==keysum){
        console.log(array2[low],array2[up]);
        low++
     }
     else if(array2[low]+array2[up]<keysum){
         low+1
     }
     else if(array2[low]+array2[up]>keysum){
         up--
     }
}