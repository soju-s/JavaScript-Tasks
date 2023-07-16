Array=[
    [10,20],
    [2,5],
    [4,6],
    [8,9,10],
    [45,55],
    [89,90]
]
for(let subArray of Array){
    for(let num of subArray){
        if(num<10){
            console.log('the square of numbers lesser than 10 are',num**2);
        }
    }
}