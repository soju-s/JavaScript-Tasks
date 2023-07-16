products=[
    {pName:'apple',price:120000},
    {pName:'apple',price:45000},
    {pName:'blackberry',price:50000},
    {pName:'nokia',price:1200},
    {pName:'nokia',price:10000}
]

output={}
for(let subPro of products){
    let name=subPro['pName']
    let currPrice=subPro['price']
    if(name in output){
        let oldPrice=output[name]
        if(oldPrice>currPrice){
            output[name]=oldPrice
        }
        else{
            output[name]=currPrice

        }

    }
    else{
        output[name]=currPrice
    }
}
console.log(output);