const person = {
  name: "John Doe",
  age: 30,
  occupation: "Engineer",
};

// for-in, entries+map, keys+forEach, Values + forEach

// 1- for-in
for (let key in person) {
  // console.log(`${key}: ${person[key]}`);
}

// 2- entries + map
let arr = Object.entries(person);

arr.map(([key, value]) => {
  // console.log(`${key}:${value}`);
});

arr.map((e) => {
  // console.log(`${e[0]}: ${e[1]}`);
});

// 3-Key + forEach
let keyArr = Object.keys(person);
keyArr.forEach((e) => {
  // console.log(`${e}:${person[e]}`);
});

// 4-Values + forEach
let valuesArr = Object.values(person);
valuesArr.forEach((e) => {
  console.log(e);
});
