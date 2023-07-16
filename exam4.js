items=['milk','bread','sugar']

index=items.indexOf('milk')
console.log('index of milk=',index);
items.splice(index,1)
console.log('array items after removing milk=',items);