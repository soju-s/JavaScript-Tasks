//[ id,name,designation,location,salary,experience]
employee = [
    [1000,'Neel','developer','kochi',25000,3],
    [1001,'Max','tester','TVM',15000,2],
    [1002,'Maxwell','QA','kochi',35000,4],
    [1003,'Vyom','QA','kochi',45000,5],
    [1004,'Laisha','tester','TVM',55000,7],
    [1005,'Aahan','developer','TVM',15000,1],
    [1006,'Aahil','QA','kochi',20000,2],
    [1007,'Shayan','developer','kochi',30000,3],
    [1008,'Nihaan','developer','TVM',25000,3]
]
//1. print all employee name using map

console.log(employee.map((name)=>name[1]));

//2.print total number of employee

console.log(employee.length);

//3. print developer employee details and print only developers name

console.log('developers are');
employee.filter(desi=>desi[2]=='developer').forEach(itm=>console.log(itm[1]))


//4. print employee whose salary > 30000 and print whose name
console.log('employees name whose salary is >30000 are');
employee.filter(slry=>slry[4]>'30000').forEach(nme=>console.log(nme[1]))

//5. print details of employee Laisha

console.log(employee.find(nme=>nme[1]=='Laisha'));

//6. Sort employee based on their salary in descending order and print their name


// employee.sort((emp1,emp2)=>emp2[4]-emp1[4]).forEach(item=>console.log(`name of employee=${item[1]} salary= ${item[4]}`))


//7. Sort employee based on their experience in ascending order and print their name

// employee.sort((emp1,emp2)=>emp1[5]-emp2[5]).forEach(nme=>console.log(`name of employee based on experience= ${nme[1]}`))


//8 highest salaried employee

high=employee.reduce((a,b)=>a[4]>b[4]?a:b)
console.log('highest salaried employee',high[1]);

//9 lowest salaried employee

lowest=employee.reduceRight((a,b)=>a[4]<b[4]?a:b)
console.log(' lowest salaried employee ',lowest[1]);

//10 total salary

total=employee.map(a=>a[4]).reduce((b,c)=>b+c)
console.log('total salary',total);
