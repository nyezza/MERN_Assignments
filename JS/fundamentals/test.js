console.log('hello')
console.log('')

const numbers1 = [1, 2, 3, 4];
const doubled = numbers.map(item => item * 2);
console.log(doubled);

const numbers = [1, 2, 3, 4];
const evens = numbers.filter(item => item % 2 === 0);
console.log(evens);

const students = [
    { name: 'Quincy', grade: 96 },
    { name: 'Jason', grade: 84 },
    { name: 'Alexis', grade: 100 },
    { name: 'Sam', grade: 65 },
    { name: 'Katie', grade: 90 }
  ];
  
  const studentGrades = students.filter(student => student.grade >= 90);
  console.log(studentGrades) ;

  var arr = [1.5, 2.56, 5.1, 12.33];
var rounded = arr.map(Math.ceil);
console.log(rounded); 

let employees = [
    {
    "id": 11,
    "name":"Abhinav",
    "salary":75000
    },
    {
    "id": 2131,
    "name":"Raj",
    "salary":62000
    },
    {
    "id": 3012,
    "name":"Raj",
    "salary":32000
    }]
    let idsArray = employees.map(employee =>employee.id)
    console.log(idsArray)
   