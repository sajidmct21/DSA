// E Mr. FA

// 1- fromEntries
let keys = [0, 1, 2];
let values = ["Niamat", "Sajid", "Abid"];

let newArr = keys.map((k) => {
  return [k, values[k]];
});

// console.log(newArr);
let obj = Object.fromEntries(newArr);
// console.log(obj);

// 2- reduce
let obj1 = keys.reduce((acc, k, i) => {
  acc[k] = values[i];
  return acc;
}, {});
// console.log(obj1);

// 3- for loop
let obj2 = {}
for(let i=0; i<keys.length; i++){
    obj2[i] = values[i]
}
// console.log(obj2);

// 4-assign
