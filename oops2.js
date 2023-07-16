class student{
    constructor(id,name,standard,){
       this.studentID=id
       this.studentName=name
       this.studentstndrd=standard
    }
displayStudent(){
    console.log('student details are');
    console.log(`student ID = ${this.studentID}student name= ${this.studentName}student standard = ${this.studentstndrd}`);
}
}
student1= new student(10,'max','7th')
student1.displayStudent()
student2=new student(20,'son','8th')
student2.displayStudent()