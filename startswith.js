// function name(fullname) {
//     console.log('the word is',fullname);
//     return fullname.startsWith('q')?'the word starts with q':'the didnot starts with q'
// }
// console.log(name('qatar'));


const name=(fullname)=>fullname[0]=='q'||fullname[0]=='Q'?'the word starts with q':'the did not starts with q'
console.log(name('qatar'));