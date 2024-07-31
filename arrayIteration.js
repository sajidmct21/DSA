let arr = [1,2,3,4,5,6,7,8,9,10];

// arr.forEach((item, index, arr)=>{
//     console.log(`index: ${index}, value: ${item}`);
// });

// let newArr = arr.map((item, index, arr)=>index*2);
// console.log(newArr);

// let even = arr.filter((item, index, array)=>{
//     return item%2===0;
// })
// console.log(even);

// let odd = arr.filter((item, index, array)=>{
//     return item%2!==0;
// })
// console.log(odd);

// let total = arr.reduce((t,item)=>{
//     return t + item
// });
// console.log(total);

// let val = arr.every((item,index, arr)=>{
//     return item%2===0;
// })
// console.log(val);

// let val2 = arr.some((item,index, array)=>{
//     return item%2===0;
// })
// console.log(val2);

for(let item of arr){
    console.log(item);
}
