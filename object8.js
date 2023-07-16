products=[
    {pid:100,pName:'apple',band:'5g',price:120000,display:'led'},
    {pid:101,pName:'samsaung',band:'5g',price:45000,display:'led'},
    {pid:102,pName:'blackberry',band:'4g',price:50000,display:'led'},
    {pid:103,pName:'nokia',band:'3g',price:1200,display:'lcd'},
    {pid:104,pName:'motorola',band:'4g',price:10000,display:'lcd'}
]

//1. print product name only

console.log('product name :');
products.forEach(item=>console.log(item.pName))

//2. print all mobile details whose display is lcd

console.log('mobile details whose display is lcd :');
console.log(products.filter(a=>a.display=='lcd'));

//3. print 5g mobile phone name

console.log('5g mobile phone name :');
products.filter(i=>i.band=='5g').forEach(item=>console.log(item.pName))

//4. sort mobile based on price

console.log('mobile based on price :');
products.sort((a,b)=>b.price-a.price).forEach(item=>console.log(item.pName))

//5. print costly mobile

console.log('costly mobile');
b=products.reduce((a,b)=>a.price>b.price?a:b)
console.log(b.pName);

//6. print low cost mobile

console.log('low costly mobile');
c=products.reduce((a,b)=>a.price>b.price?b:a)
console.log(c.pName);