baleno={
    model :'hatchback',
    manufacturer :'suzuki',
    price : 1000000
}
glanza={
    manufacturer:'toyota'
}
glanza.__proto__=baleno
console.log('model=',glanza.model);
console.log('manufacturer is',glanza.manufacturer);