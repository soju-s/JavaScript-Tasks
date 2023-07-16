var arr=[10,11,2,12,13,4,15]
ispresent=false
a=4
for(let num of arr)
{
   if(num==a){
    ispresent=true
    break
   }
}
console.log(ispresent?'4 is in the array':'4 is not in the array')