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
//1. print all employee name

for(let subArray of employee){
    console.log('name',subArray[1]);
}
//2.print total number of employee
a=employee.length
console.log(a);
//3. print developer employee details
console.log('developers are');
for(let subArray of employee){
    if(subArray[2]=='developer'){
        console.log(subArray);
    }
}

//4. print employee whose salary > 30000
console.log('whose salary greater than 30000');
for(let subArray of employee){

    if(subArray[4]>'30000'){
        console.log(subArray);
    }
}

//5. print details of employee Laisha

for(let subArray of employee){

    if(subArray[1]=='Laisha'){
        console.log('details of laisha',subArray);
    }
}

//6. Sort employee based on their salary in descending order

console.log('salary in descending order');
employee.sort((emp1,emp2)=>emp2[4]-emp1[4])
console.log(employee);

//7. Sort employee based on their experience in ascending order

console.log('employee based on experience');
employee.sort((emp1,emp2)=>emp1[5]-emp2[5])
console.log(employee);