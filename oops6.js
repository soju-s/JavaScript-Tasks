function sum(...arg) {
console.log(arg);
    return arg.reduce((a,b)=>a+b)
}
console.log('sum =',sum(10,20,30));