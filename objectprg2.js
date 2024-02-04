student={
    rollno: 1,
    name: "Christin",
    class: "10th"
}

console.log(student);

"location" in student?console.log('present'): student["location"]="Pathanamthitta"
console.log(student);

// object assign method

 Object.assign(student,{isVaccinated:true})
 console.log(student);

 Object.assign(student,{division:"A"})
 console.log(student);

 Object.assign(student,{Age:21})
 console.log(student);

//update object

//update roll no
student.rollno+=3
console.log(student);

//update name
student.name="Christin Thomas"
console.log(student);

// delete key from an object

delete student.isVaccinated
console.log(student);