// SAD PE FE

let obj = { name: "Sajid" };

// 1-Spread operator
obj = { ...obj, n2: "Abid" };
// console.log(obj);

// 2-assign()
Object.assign(obj, { n3: "Saad" });
// console.log(obj);

// 3-defineProperty()
Object.defineProperty(obj, "n4", {
  value: "Abdul Hadi",
  enumerable: true,
  writable: true,
  configurable: true,
});
// delete obj['n4']
// console.log(obj);

//4-entries() and fromEntries()
const obj4 = { organization: "GFG" };
let arr = Object.entries(obj4);
arr.push(["filed", "Computer Science"]);
let obj5 = Object.fromEntries(arr);
console.log(obj5);
