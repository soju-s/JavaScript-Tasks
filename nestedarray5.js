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

console.log('district having Highest +ve case=');
highest=covid_data.reduce((case1,case2)=>case1[2]>case2[2]?case1:case2)
console.log(highest[1]);

//2. district having Highest 1st dose vaccine

console.log('district having Highest 1st dose vaccine');
high=covid_data.reduce((a,b)=>a[5]>b[5]?a:b)
console.log(high[1]);

//3. district having lowest death rate

console.log('district having lowest death rate');
lowest=covid_data.reduce((a,b)=>a[3]<b[3]?a:b)
console.log(lowest[1]);

//4. sort data with +ve case in descending order

console.log('District with +ve case in descending order=');
covid_data.sort((a,b)=>b[2]-a[2]).forEach(item=>console.log(item[1]))

//5. is district with +ve cases > 15000


dist=covid_data.some(a=>a[2]>'15000')
console.log('is district with +ve cases > 15000 =' ,dist?'yes':'No');

//6. sort data with 1st dose vaccine

console.log('Sort district with 1st dose vaccine =');
covid_data.sort((a,b)=>b[5]-a[5]).forEach(item=>console.log(item[1]))

//7. Print Thrissur details

console.log('Thrissur details=');
tr=covid_data.find(d=>d[1]=='Thrissur')
console.log(tr);

//8. Print total number of positive cases

console.log('total number of positive cases');
sum=covid_data.map(a=>a[2]).reduce((c,b)=>c+b)
console.log(sum);

//9. Print total number of curred cases

console.log('total number of curred cases');
total=covid_data.map(c=>c[4]).reduce((a,b)=>a+b)
console.log(total);

//10. Print curred cases in Idukki

console.log('curred cases in Idukki=');
idukki=covid_data.find(a=>a[1]=='Idukki')
console.log(idukki[4]);