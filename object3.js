var boleno={
    car_name:'Boleno',
    model1:'HatchBack',
    manufacturer:'Maruthi Suzuki',
    price:'1000000'

}
// display manufacturer of boleno

console.log('manufacturer is',boleno.manufacturer);

//check model key is available in boleno then display its value

console.log('model1' in boleno?boleno['model1']:'not found');

//add varient key to the object boleno, add value as manuel,automatic

boleno['varient']=['manuel','automatic']
console.log(boleno.varient);

boleno.varient.push('hybrid')
console.log(boleno);

//add color key to object and value as well

boleno.color=['white','black','blue']
console.log('the available colors are',boleno.color);