//[ no,district,+ve cases,death rate,curred rate,1st dose vaccine,2nd dose vaccine]
covid_data = [
    [1,'Ernakulam',34000,2000,23000,20000,2000],
    [2,'Idukki',14000,3000,25000,30000,1000],
    [3,'Thrissur',24000,4000,33000,24000,2500],
    [4,'Pathanamthitta',20000,2000,45000,22000,1500],
    [5,'Kozhikode',44000,5000,12000,21000,500],
    [6,'Palakkad',12000,1000,20000,23000,3400],
    [7,'Kottayam',27000,1500,27000,14000,1000],
    [8,'Kollam',14000,2500,25000,18000,2700]
]

//1. district having Highest +ve case


// highest=0
// for(let subArray of covid_data){
// if(subArray[2]>highest){
//     highest=subArray[2]
//     district=subArray[1]
// }
// }
// console.log('District with highest +ve case=',district);


//2. district having Highest 1st dose vaccine

// vaccine=0
// for(let subArray of covid_data){
// if(subArray[5]>vaccine){
//     vaccine=subArray[5]
//     dose=subArray[1]
// }
// }
// console.log('District with highest 1st dose vaccine=',dose);


//3. district having lowest death rate


// covid_data.sort((a,b)=>b[3]-a[3])
// for(let subArray of covid_data){
//     a=subArray[1]
// }
// console.log('District with lowest death rate=',a);


//4. sort data with +ve case in descending order


// console.log('Data with +ve case in descending order=');
// covid_data.sort((a,b)=>b[2]-a[2])
// console.log(covid_data);


//5. is district with +ve cases > 15000

// isDistrict=false
// console.log('');
// for(let subArray of covid_data){
//     if(subArray[2]>15000){
//         isDistrict=true
//         console.log('The district with +ve case >15000 =',subArray[1]);
//     }
    
// }
// !isDistrict&&console.log('There are no districts with +ve case >15000');


//6. sort data with 1st dose vaccine

// console.log('Sort with 1st dose vaccine =');
// covid_data.sort((a,b)=>b[5]-a[5])
// console.log(covid_data);

//7. Print Thrissur details

// console.log('Thrissur details=');
// console.log(covid_data[2]);

//8. Print total number of positive cases

// sum=0
// for(let subArray of covid_data){
//     sum=sum+subArray[2]
// }
// console.log('Total number of positive case=',sum);


//9. Print total number of curred cases


// sum=0
// for(let subArray of covid_data){
//     sum=sum+subArray[4]
// }
// console.log('Total number of curred case=',sum);

//10. Print curred cases in Idukki

// a=covid_data[1]
// console.log('curred case in idukki=',a[4]);