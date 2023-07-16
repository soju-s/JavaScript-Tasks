p=[10,11,12,20,30]
q=[11,20,21,30,31]
p.sort((a,b)=>a-b)
q.sort((a,b)=>a-b)
i=0
j=0
count=0
r=[]
isFound=false
while(i<p.length&&j<q.length){
    if(p[i]==q[j]){
        console.log('the common items are',p[i]);
        isFound=true
        r=r+p[i]+'\t'
        i++
        j++
        count++
    }
    else if(p[i]>q[j]){
        j++
    }
    else if(p[i]<q[j]){
        i++
    }
}
!isFound&&console.log('there are no common items');
isFound&&console.log(`the common items are ${r}`);
console.log('count=',count);