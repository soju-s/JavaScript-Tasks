// even numbers

a=[11,10,12,13,14,15]
// even=a.filter(num=>num%2==0)
// console.log(even);

// //greater than 12

// greater=a.filter(num=>num>12)
// console.log(greater);

// //if num<=12 increment num>12 decrement

// a=[10,11,12,13,14,15]
// output=a.map((num)=>num<=12?num+1:num-1)
// console.log(output);

// // //sort in descending order

// console.log(a.sort((b,c)=>c-b));

// // //print odd numbers

// console.log(a.filter(b=>b%2!=0));

// // //print 11

// console.log(a.find(b=>b==11));

// // //find number of items

// console.log(a.length);

// //find index of 13

// b=a.indexOf(13)
// console.log(b);

// //add item

// a.push(16)
// console.log(a);

// //remove item

// a.pop()
// console.log(a);

//is number starts with 10

// c=a.some(b=>b[0]==10)
// console.log(c?'yes':'no');

//is number ends with 15


b=a[a.length-1]
console.log(b==15?'yes':'no');