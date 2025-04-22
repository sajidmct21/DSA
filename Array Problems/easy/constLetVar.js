// a=5;
// console.log(a);  // ReferenceError: a is not defined

// console.log(a); // undefined
// var a = 10;

// var a = 10
// function fun(){
//     a = 5
//     console.log(a);
// }
// fun(); // 5

// var a = 10
// function fun(){
//     var b = 5
//     console.log(a);
// }
// fun(); // 10

// var a = 10
// function fun(){
//     var b = 5
//     console.log(a);
// }
// fun();
// console.log(b); // ReferenceError: b is not defined

// console.log (greeter);
// var greeter = "say hello"

let arr = [20, 30, 40, 50, 12, 30, 40, 40];
let max = 0;
let fre = {};
arr.forEach((e, i) => {
  if (fre[e]) {
    fre[e] = fre[e] + 1;
  } else {
    fre[e] = 1;
  }
let a = Object.values(fre)
  a.forEach((e)=>{
    if(fre[e]>max){
        max = fre[e]
    }
  })
});
console.log(max);
