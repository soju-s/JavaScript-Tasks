text='hai hello all welcome hello hai'

//display word count 

// //1 split thext 
// word=text.split(' ')
// //2 create an empty object
// output={}
// //3 get each word from array
// for(let check of word){
//     if(check in output){
//         output[check]+=1

//     }
//     else{
//         output[check]=1
//     }
// }
// console.log('word count of text',text);
// console.log(output);


output={}
word=text.split(' ')
for(let subword of word){
    if(subword in output){
        output[subword]+=1
    }
    else{
        output[subword]=1
    }
}
console.log(output);