employee1={
    id:1000,
    name:'Neer',
    desig:'Mearn stack',
    salary:56000,
    location:'kochi',
    exp:3
}
console.log(employee1);

//to display an object type
console.log(typeof(employee1));


//to fetch a particular item 1-object name['key'] 2-object name.key
//to check a key in object
console.log('name' in employee1?employee1['name']:'key not found');

//display employee name and his designation

// console.log('desig' in employee1?employee1['name']:'not found');

// console.log('employee designation=',employee1.desig);

// //check a key is present in object if not add it to object
// //check isvaccinated key is present in employee if not add it to object



// 'isVaccinated' in employee1?console.log('key is present'):employee1['isVaccinated']='yes'
// console.log(employee1);

// //update an existing value
// //increment salary by 4000

// employee1.salary+=4000
// console.log(employee1);

// //to fetch key one by one



// for(let key in employee1){
//     console.log(`${key}:${employee1[key]}`);
// }