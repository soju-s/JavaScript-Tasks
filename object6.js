//display number count
// output={}
numArray=[10,20,30,40,20,30,50,30,20,10,60,70,40,50,60,70,80,20]
// for(let subArray of numArray){
//     if(subArray in output){
//         output[subArray]+=1
//     }
//     else{
//         output[subArray]=1
//     }
// }
// console.log(output);


output={}
for(let arr of numArray){
    if(arr in output){
        output[arr]+=1
    }
    else {
        output[arr]=1
    }
}
console.log(output);