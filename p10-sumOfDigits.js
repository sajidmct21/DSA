let num = 12345;

// let numArr = num.toString().split('');

// let sum = numArr.reduce((acc,element)=>{
//     return acc + parseInt(element);
// },0);

// let sum = 0;
// while(num > 0){
//   let  remainder = num % 10;
//   sum = sum + remainder;
//   num = parseInt(num / 10);
// }

let sum = 0;
let numArr = num.toString().split('');
numArr.forEach(element => {
    sum = sum + parseInt(element);
});

console.log(sum);