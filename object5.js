//find first recursive character from ='AABCCBAD'

word='AABCD'
// output={}
// a=word.split('')
// for(let b of a){
//     if(b in output){
//         console.log('first recursive character is',b);
//         break
//     }
//     else{
//         output[b]=1
//     }
// }


output={}
a=word.split('')
for(let b of a){
    if(b in output){
        console.log('the recursive word is',b);
    }
    else{
        output[b]=1
    }
}
