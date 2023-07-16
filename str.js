str='hello hai'
//display vowels 
// chara=str.split('')
vowel=['a','e','i','o','u']
// console.log(chara);
// for(let subchar of chara){
//     for(let subvowel of vowel){
//         if(subchar==subvowel){
//             console.log(subchar);
//         }
//     }
// }
// for(let subchara of chara){
//     if(vowel.includes(subchara)){
//         console.log(subchara);
//     }
// }


// Array.from(str).filter(char=>vowel.includes(char)).forEach(item=>console.log(item))



arr=str.split('')
for(let subarr of arr){
    for(let subvowel of vowel){
        if(subarr==subvowel){
            console.log(subarr);
        }
    }
}