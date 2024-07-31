// let num = 371;
// let temp = num
// let len = 0;
// let sum = 0;
// while(temp > 0){
//    temp = Math.floor(temp / 10);
//   len++;
// }

// let temp2 = num;
// while(temp2>0){
//  let digit = temp2 % 10;
//  sum = sum + digit**len;
//  temp2 = parseInt(temp2 / 10);
// }
// if(sum == num){
//   console.log(`armstrong`);
// }
// else{
//   console.log(`not`);
// }


// let num = 371;
// let num = 82088;
//   let temp = num;
//   let numArr = [];
//   let count = 0;
//   let i = 0;
//   let sum = 0;

//   while (temp > 0) {
//     numArr[i] = temp % 10;
//     temp = Math.floor(temp / 10);
//     count++;
//     i++;
//   }

//   for (let j = 0; j < count; j++) {
//     sum = sum + Math.pow(numArr[j], count);
//   }

//   if (num == sum) {
//     console.log(`${num} is armstrong`);
//   } else {
//     console.log(`${num} is not armstrong`);
//   }

// function armstrong(x) {
//   let num = x;
//   let temp = num;
//   let numArr = [];
//   let count = 0;
//   let i = 0;
//   let sum = 0;

//   while (temp > 0) {
//     numArr[i] = temp % 10;
//     temp = Math.floor(temp / 10);
//     count++;
//     i++;
//   }

//   for (let j = 0; j < count; j++) {
//     sum = sum + Math.pow(numArr[j], count);
//   }

//   if (num == sum) {
//     console.log(`${num} is armstrong`);
//   } else {
//     console.log(`${num} is not armstrong`);
//   }
// }

// armstrong(371);


// Approach 1: Using toString() and split() Method
function armstrong(number){
  let digitArray = number.toString().split('');
  let len = digitArray.length;
  let sum = digitArray.reduce((acc,digit)=>{
    return acc + (parseInt(digit)**len)
  },0)

  if(sum == number){
    console.log(`Armstrong`);
  }
  else{
    console.log(`Not Armstrong`);
  }
}

armstrong(8208);