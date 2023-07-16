//check for friday
weekDays=['Monday','Tuesday','Wednesday','Thursday','Friday']

// console.log(weekDays.includes('Friday')); 

// //remove wednesday

// index=weekDays.indexOf('Wednesday')
// console.log(index);

// weekDays.splice(index,1,'item removed')
// console.log(weekDays);


// ind=weekDays.indexOf('Tuesday')
// weekDays.splice(ind,1,'saturday')
// console.log(weekDays);


b= weekDays.some(a=>a=='Friday')
console.log(b?'yes':'no');