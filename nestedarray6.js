//[id,name,price,stock]
products=[
    [1,'hide and seek',50,20],
    [2,'lays',20,80],
    [3,'oreo',40,100],
    [4,'parleG',25,0],
    [5,'tiger',20,30],
    [6,'unibic',60,20],
    [7,'good day',70,20]
]

//1. display all product name
nme=products.map(a=>a[1])
console.log('product name',nme);

console.log('-----------------');

//2. display product whose price < Rs.50

products.filter(a=>a[2]>50).forEach(b=>console.log('product whose price < Rs.50 = ',b[1]))


console.log('-----------------');

//3. print price of oreo

prse= products.find(a=>a[1]=='oreo')
console.log('price of oreo = ',prse[2]);

console.log('-----------------');


//4. print costly product name

costly=products.reduce((a,b)=>a[2]>b[2]?a:b)
console.log('costly product name = ',costly[1],'and its cost=',costly[2]);

console.log('-----------------');

//5. display out of stock product

products.filter(a=>a[3]==0).forEach(b=>console.log('out of stock product = ',b[1]))

console.log('-----------------');

//6. sort products based on stock in decsending order
console.log('sort products based on stock in decsending order');
products.sort((a,b)=>b[3]-a[3]).forEach(c=>console.log(c[1]))
console.log('-----------------');

//7. print product having maximum available stock

avail=products.reduce((a,b)=>a[3]>b[3]?a:b)
console.log('product having maximum available stock = ',avail[1]);

console.log('-----------------');

//8. is there any product can be purchased by Rs. 10

prop= products.some(a=>a[2]<10)
console.log('is there any product can be purchased by Rs. 10 : ',prop?'yes':'No');

//9. Is there any product in the range of 10 to 30

rnge=products.some(a=>a[2]>10&&a[2]<30)
console.log('Is there any product in the range of 10 to 30 : ',rnge?'Yes':'No');
console.log('-----------------');

//10. print all products in the range of 10 to 30

products.filter(a=>a[2]>10&&a[2]<30).forEach(b=>console.log('products in the range of 10 to 30 = ',b[1]))