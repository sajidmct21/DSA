let str = 'Welcome to Pakistan';
/*
 step-1 convert string innto array by split(' ')
 step-2 Reverse the array using reverse()
 step-3 Convert the array into string by join(' ')
 */
let strArr = str.split(' ').reverse().join(' ');

console.log(strArr);