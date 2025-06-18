const person = {
  name: "John Doe",
  age: 30,
  occupation: "Engineer",
};

// DDREFE (D DR EFE)

// 1- Delete Operator
delete person.occupation;
// console.log(person);

// 2- Destructuring + Rest operator
let { occupation, ...restObj } = person;
// console.log(restObj);

// 3- entries + fromEntries
let arr = Object.entries(person);
let arr1 = arr.filter(([key]) => {
  return key !== "occupation";
});

// console.log(arr1);
let obj = Object.fromEntries(arr1);
console.log(obj);
