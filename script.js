/*alert("Hello World");
console.log("Console Test"); 

var birthYear = 1984;
let isMad = false;
const birthYear = 1984; (Error)

const birthYear = 1984;
alert("Literally " + birthYear);

let statement = "Sneery ";
statement = statement + "is my username!";
alert(statement);

let isLoggedIn = false;

if(isLoggedIn) {
    alert("You have successfully logged in");
} else {
    alert("You have not sucessfully logged in");
}*/

const finalGradePercent = 95;
let letterGrade;

if(finalGradePercent >= 90) {
    letterGrade = "A";
} else if (finalGradePercent >= 80) {
    letterGrade = "B";
} else if (finalGradePercent >= 70) {
    letterGrade = "C";
} else if (finalGradePercent >= 60) {
    letterGrade = "D";
} else {
    letterGrade = "F"
}

const birthYear = 2000;
if ((2022 - birthYear) < 18) {
    alert("You are under 18");
} else {
    alert("You are over 18");
}

let name1 = "Manchester United";
let name2 = "Manchester City";

if(name1 === name2) {
    alert("Manchester is Blue");
} else {
    alert ("Manchester is Red")
}

alert("I received an " + letterGrade + " in this class");