let arr = [1, 2, 3, 4];

// Pucs -> Pucks
const person = {
  name: "John Doe",
  age: 30,
  occupation: "Engineer",
};

// 1- Push 
// arr.push(person)
// console.log(arr);

// 2-unshift 
// arr.unshift(person)
// console.log(arr);

// 3-concat 
// let newArr = arr.concat(person)
// console.log(newArr);

// let newArr1 = [...arr, person]
let newArr1 = [person, ...arr]
console.log(newArr1);