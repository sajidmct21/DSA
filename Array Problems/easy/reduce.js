let arr = [10, 20, 20, 30, 40, 50, 50];

// 1-Delete Duplicate
// let res = arr.reduce((acc, e, i) => {
//     if(!acc.includes(e)){
//         acc.push(e)
//     }
//     return acc;
// }, []);
// console.log(res);

// 2- Find Maximum 
// let res = arr.reduce((max, e, i)=>{
//     if(e> max){
//         max = e
//     }
//     return max;
// }, -Infinity);
// console.log(res);

// 3-Find Duplicate
// arr = arr.sort((a,b)=> a-b)
// let res = arr.reduce((acc, e, i)=>{
//     if(arr[i]===arr[i-1]){
//         acc.push(e)
//     }
//     // return acc;
//     return Array.from( new Set(acc));
// },[])
// console.log(res);

// 4- Insert multiple items 
// let a = [99,100,101];
// let index = 2;
// let res = arr.reduce((acc, e, i)=>{
//     if(i === index){
//         acc.push(...a)
//     }
//     acc.push(e)
//     return acc
// },[])
// console.log(res);

// 5-Get First N elements 
// let n = 4
// let res = arr.reduce((acc,e,i)=>{
//     if(i<n){
//         acc.push(e)
//     }
//     return acc;
// },[])
// console.log(res);


let obj ={
    name:"Sajid",
    age:25,
    job_title:"Quality Control Engineer",
    place:"KSA"
}

let o = Object.entries(obj).map((e)=>e[1])
console.log(o);

// let arr3 = Object.entries(obj).map((value)=>value[0])
// console.log(arr3);

// let a = [];
// for(let key in obj){
//     a.push(obj[key])
// }
// console.log(a);
// let arr1 = Object.values(obj)
// for(let key in obj){
//     console.log(`${key}: ${obj[key]}`);
// }
// console.log(arr1);
// let arr2 = Object.keys(obj)
// console.log(arr2);



