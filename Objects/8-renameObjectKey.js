let person = {
  name: "Sajid Yaqoob",
  age: 40,
};

// SAD Assignment

// 1- spread operator with destructuring
// let {name, ...restObj} = person
// restObj.fullName = name
// console.log(restObj);

// 2-assign()
let { age } = person;
let o = Object.assign({ age }, { fullName: person.name });
console.log(o);

//3-Assignment of variables
// person["fullName"] = person["name"];
// delete person["name"];
// console.log(person);
