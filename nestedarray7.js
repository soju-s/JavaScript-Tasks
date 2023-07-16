a=[[10,20],[12,34],[4,56],[7,45],[2,9]]

//1 print all numbers <10
b=a.flat(Infinity).filter(c=>c<10)
console.log('all numbers <10',b);

//2 print square of all numbers

b=a.flat(Infinity).map(c=>c**2)
console.log('square of all numbers',b);

//3 print total sum of all number 

b=a.flat(Infinity).reduce((c,d)=>c+d)
console.log('total sum of all number ',b);

//print highest number

b=a.flat(Infinity).reduce((c,d)=>c>d?c:d)
console.log('highest number',b);
