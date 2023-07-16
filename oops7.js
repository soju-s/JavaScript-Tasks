try {
    console.log('try');
    expr='10+20-5*2'
result = eval(expr)
console.log(result);

    
} catch (error) {
    console.log('catch');
    console.log('invalid expression');
}
finally{
    console.log('finally block');
}


