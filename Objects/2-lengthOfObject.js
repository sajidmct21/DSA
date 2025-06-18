const person = {
  name: "John Doe",
  age: 30,
  occupation: "Engineer",
};

// keys, vales, entries

// 1- keys
let keyArr = Object.keys(person);
// console.log(keyArr.length);

// 2-Values
let valueArr = Object.values(person);
// console.log(valueArr.length);

// 3-entries
let entriesArr = Object.entries(person);
console.log(entriesArr.length);
