class Student{
    //property
    stdname
    stdrollno
    stddiv
    stdclass

    constructor(Name, Rollno , Div , Class){
        this.stdname=Name
        this.stdrollno=Rollno
        this.stddiv=Div
        this.stdclass=Class
        this.display() // Also we can place here for calling display()
    }
display(){console.log('Student Name is :',this.stdname,', Student RollNo is :',this.stdrollno,'Division is :',this.stddiv,'Class is :', this.stdclass);}

}

const std1= new Student('Amal',1,'A','X')
const std2= new Student('Bibin',2,'B','X')
