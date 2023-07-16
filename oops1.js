class Employee{
    //property
    empID
    empName
    empSalary
    empDesig

    //to initialise class property using constructor method

    constructor(id,name,salary,designation){
        this.empID=id
        this.empName=name
        this.empSalary=salary
        this.empDesig=designation
    }

    //to display class
    displayEmployee(){
        console.log('employee details');
        console.log(`employee id = ${this.empID}
        employee name- ${this.empName}
        employee salary = ${this.empSalary}
        employee designation = ${this.empDesig}`);
    }
}

//create object to acess the class properties

emp1= new Employee(1,'max','developer',55000)
emp1.displayEmployee()
emp2=new Employee(2,'son','tester',45000)
emp2.displayEmployee()