// binary search
arr=[10,11,2,12,13,4,15]
searchKey=10
isFound=false
low=0
up=arr.length-1
count=0
console.log('binary search');
// 1. sort items 
arr.sort((a,b)=>a-b)
while(low<=up){
    count++
//2. find mid 
mid=Math.floor((low+up)/2)
//3. compare 
//3.1 both equal
if(searchKey==arr[mid]){
    isFound=true
    break
}
//3.2 mid>searchkey
else if(arr[mid]>searchKey){
// search in left side and update index array
up=mid-1
}
//3.2 mid<searchkey
else if(arr[mid]<searchKey){
// search in right side 
low=mid+1
}
}
console.log('after sorting count=',count);
console.log(isFound?'array is in':'array is not in')