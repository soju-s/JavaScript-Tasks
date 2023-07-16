var pstatus='parent child'
function parent() {
let pname='max'
console.log('parent name is ',pname);
console.log(pstatus);
return function child(){
    let cname='freddy'
    console.log('child name is',cname);
    console.log('parent name is',pname);
    console.log(pstatus);
}
    
}
ch=parent()
ch()