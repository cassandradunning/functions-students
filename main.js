// Book 2: Function Flow (Grading Students)
/*
 define four functions. 
(1) will create a student object, 
(3) will add a grade for a subject to the student object
*/

/*
1. createStudent() should return a new student object. 
The name of the student, and which grade the student is in, 
must be passed to the function as arguments. The returned object 
should have a name property and a grade property. */


// obj properties: name, grade *passed as arguments
// define func createStudent
const createStudent = (studentName, studentGrade) => {
// the returned obj should have both name and grade properties
    return {
        name: studentName,
        grade: studentGrade
    };
};
// prints: Jessica Smith
console.log(createStudent("Jessica Smith", "6"));
// creates new variable that includes the student named: Jessica Smith
const newStudent = (createStudent("Jessica Smith", "6"))
    //  Prints: name: Jessica Smith, grade: 6
    // TO CHECK IF IT WORKS: console.log(newStudent);


/* 2. addMathGrade() should add a new "math" property to the 
student with a value of "B" */

const addMathGrade = (obj, mathGrade) => {
    // property of math will equal the math grade
    obj.math = mathGrade;
    // return the entire obj
    return obj;
};
// create new variable that adds math grade to new student variable
const studentMathGrade = addMathGrade(newStudent, "B");
// Prints: math: "B"
// TO CHECK IF IT WORKS: console.log(studentMathGrade);

/* 3. addHistoryGrade() should add a new "history" property to the 
student with a value of "C" */

const addHistoryGrade = (obj, historyGrade) => {
    // add the property of history to equal the historyGrade
    obj.history = historyGrade;
    // return the entire obj
    return obj;
};

// create new var to equal the history grade to the studentMathGrade var from before
const studentHistoryGrade = addHistoryGrade(studentMathGrade, "C");
    // Prints:s history; 'C'
    //  TO CHECK IF IT WORKS: console.log(studentHistoryGrade);

/* 4. addScienceGrade() should add a new "science" property to the 
student with a value of "A". */

const addScienceGrade = (obj, scienceGrade) =>{
    // add the property of science to equal the scienceGrade
    obj.science = scienceGrade;
    // return the entire obj
    return obj;
};

// create new var to = the new grade plus the previous var
const studentScienceGrade = addScienceGrade(studentHistoryGrade, "A");
// prints: science: 'A'
console.log(studentScienceGrade);
