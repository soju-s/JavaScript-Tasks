arr=[10,11,2,12,13,4,15]
low=0
key=4
isFound=false
up=arr.length-1
arr.sort((a,b)=>a-b)
while(low<up){
    mid=Math.floor((low+up)/2)
if(arr[mid]==key){
    isFound=true
    break
}
else if(arr[mid]>key){
    up=mid-1
}
else if(arr[mid]<key){
    low=mid+1
}
}
console.log(isFound?'4 is present ':'4 is not present');