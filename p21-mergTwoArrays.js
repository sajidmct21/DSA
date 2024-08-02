// Merge Two Sorted and unsorted Arrays 

let arr1 = [1,2,3,4];
let arr2 = [2,3,4,5,6,7,8,9];
let n1 = arr1.length;
let n2 = arr2.length;

// let arr3 = [];
// let c = 0;
// for(let i = 0; i < n1; i++){
//     arr3[c]= arr1[i];
//     c++;
// }
// for(let i = 0; i< n2; i++){
//     arr3[c]= arr2[i];
//     c++
// }
// arr3 = arr3.sort((a,b)=> a-b);
// let arr4 = arr3.sort((a,b)=>(b-a));
// console.log(arr3);
// console.log(arr4);

let arrr = [...arr1, ...arr2];
console.log(arrr);

