var weekdays=['monday','tuesday','wednesday']
console.log(weekdays);
//total no of items in array
console.log('total days=',weekdays.length);
// type of array
console.log('type of array',typeof(weekdays));
// to fetch first  items from array
console.log('first item=',weekdays[0]);
console.log('last item=',weekdays[weekdays.length-1]);
// to get index of a particular item from array
var tuesdayindex=weekdays.indexOf('tuesday')
console.log('index of tuesday =',tuesdayindex);
// to add item
weekdays.push('thursday','friday',2)
console.log(weekdays);
// to remove item
weekdays.pop()
console.log(weekdays);
// to dispaly item one by one
// methof 1
for(index=0;index<weekdays.length;index++)
{
    console.log(weekdays[index]);
}
// mehod 2
for(let day of weekdays)
{
    console.log(day);
}
// method 3
for(let index in weekdays)
{
    console.log(weekdays[index]);
}