items=['milk','bread','sugar']

function name(items){
    console.log('is item milk exist in array',items);

    console.log(items.includes('milk')?'yes':'no');
}
name(items)